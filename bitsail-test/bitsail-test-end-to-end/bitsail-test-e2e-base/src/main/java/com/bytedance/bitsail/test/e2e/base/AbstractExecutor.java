/*
 * Copyright 2022 Bytedance Ltd. and/or its affiliates.
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

package com.bytedance.bitsail.test.e2e.base;

import com.bytedance.bitsail.common.configuration.BitSailConfiguration;
import com.bytedance.bitsail.test.e2e.base.container.AbstractContainer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Executor for running BitSail job.
 */
public abstract class AbstractExecutor extends AbstractContainer {
  private static final Logger LOG = LoggerFactory.getLogger(AbstractExecutor.class);

  /**
   * Configure the executor before initialization.
   */
  abstract void configure(BitSailConfiguration executorConf);

  /**
   * Initialize the executor.
   */
  abstract void init();

  /**
   * Run BitSail job in the executor.
   */
  abstract void run() throws Exception;
}