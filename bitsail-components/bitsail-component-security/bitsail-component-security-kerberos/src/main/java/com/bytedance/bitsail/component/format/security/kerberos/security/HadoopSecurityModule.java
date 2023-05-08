/*
 * Copyright 2022-2023 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.component.format.security.kerberos.security;

import com.bytedance.bitsail.common.configuration.BitSailConfiguration;
import com.bytedance.bitsail.common.util.Preconditions;
import com.bytedance.bitsail.component.format.security.kerberos.common.KerberosConstants;
import com.bytedance.bitsail.component.format.security.kerberos.option.KerberosOptions;

import lombok.Getter;
import lombok.SneakyThrows;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.security.UserGroupInformation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.lang.reflect.Method;
import java.security.PrivilegedAction;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Callable;

public class HadoopSecurityModule extends KerberosAbstractSecurityModule {

  private static final Logger LOG = LoggerFactory.getLogger(HadoopSecurityModule.class);

  private Boolean useSubjectCreditsOnly;

  private Boolean activated = false;

  @Getter
  private transient UserGroupInformation userGroupInformation;

  @Override
  public void initializeModule(BitSailConfiguration securityConfiguration) {
    super.initializeModule(securityConfiguration);
    this.useSubjectCreditsOnly = securityConfiguration
        .get(KerberosOptions.KERBEROS_KRB5_USE_SUBJECT_CREDITS_ONLY);
    validate();
    activated = true;
  }

  public void initializeModule(String principal,
                               String keytabPath,
                               String krb5confPath,
                               Boolean useSubjectCreditsOnly) {
    this.principal = principal;
    this.keytabPath = keytabPath;
    this.krb5confPath = krb5confPath;
    this.useSubjectCreditsOnly = useSubjectCreditsOnly;

    try {
      validate();
    } catch (Exception e) {
      LOG.warn("Failed to initialize hadoop security module", e);
      activated = false;
      return;
    }
    activated = true;

    LOG.info("Kerberos principal={}, keytabPath={}, krb5confPath={}", principal, keytabPath, krb5confPath);
    LOG.info("Kerberos security module initialized.");
  }

  public void login() {
    if (!activated) {
      return;
    }

    if (securityConfiguration != null && !securityConfiguration.get(KerberosOptions.KERBEROS_ENABLE)) {
      LOG.info("Hadoop module disabled.");
      return;
    }

    // refresh realm according to current krb5 conf
    System.setProperty(KerberosConstants.SYSTEM_ENV_KRB5_CONF_PATH, krb5confPath);
    refreshConfig();

    if (Objects.nonNull(useSubjectCreditsOnly)) {
      System.setProperty(KerberosConstants.USE_SUBJECT_CREDS_ONLY, useSubjectCreditsOnly.toString());
    }
    Configuration configuration = new Configuration();

    if (securityConfiguration != null) {
      Map<String, String> kerberosHadoopConf = securityConfiguration.getUnNecessaryOption(KerberosOptions.KERBEROS_HADOOP_CONF,
          new HashMap<>());
      kerberosHadoopConf.forEach(configuration::set);
    }
    configuration.set(KerberosConstants.HADOOP_AUTH_KEY, "Kerberos");

    reset();
    UserGroupInformation.setConfiguration(configuration);

    try {
      userGroupInformation = UserGroupInformation.loginUserFromKeytabAndReturnUGI(principal, keytabPath);
      LOG.info("Successfully login, login user: {}.", userGroupInformation);
    } catch (IOException e) {
      LOG.error("failed to login", e);
    }
  }

  public <T> T doAsWithoutLogin(Callable<T> callable) throws Exception {
    if (!activated) {
      return callable.call();
    }

    return userGroupInformation.doAs(new PrivilegedAction<T>() {
      @Override
      @SneakyThrows
      public T run() {
        return callable.call();
      }
    });
  }

  public <T> T doAs(Callable<T> callable) throws Exception {
    if (!activated) {
      return callable.call();
    }

    login();
    return userGroupInformation.doAs(new PrivilegedAction<T>() {
      @Override
      @SneakyThrows
      public T run() {
        return callable.call();
      }
    });
  }

  @Override
  public void logout() {
    if (activated) {
      Configuration configuration = new Configuration();

      if (securityConfiguration != null) {
        Map<String, String> kerberosHadoopConf = securityConfiguration.getUnNecessaryOption(KerberosOptions.KERBEROS_HADOOP_CONF,
            new HashMap<>());
        kerberosHadoopConf.forEach(configuration::set);
      }
      configuration.set(KerberosConstants.HADOOP_AUTH_KEY, "simple");

      reset();
      UserGroupInformation.setConfiguration(configuration);

      LOG.info("User {} successfully logout.", principal);
    }
  }

  private static void reset() {
    try {
      Method reset = UserGroupInformation.class.getDeclaredMethod("reset");
      reset.setAccessible(true);
      reset.invoke(null);
    } catch (Exception e) {
      LOG.error("Invoke reset.", e);
    }
  }

  private void validate() {
    Preconditions.checkNotNull(principal, "UserGroupInformationUtils: principal cannot be null");
    Preconditions.checkNotNull(keytabPath, "UserGroupInformationUtils: keytabPath cannot be null");
    Preconditions.checkNotNull(krb5confPath, "UserGroupInformationUtils: krb5confPath cannot be null");
  }
}
