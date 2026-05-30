/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AdPhase {
  timeRange: string;
  label: string;
  title: string;
  focus: string;
  explanation: string;
  mechanic: string;
  visualCue: string;
}

export interface StrategyPoint {
  id: number;
  title: string;
  subtitle: string;
  creatorExecution: string;
  dtcTranslation: string;
  metricLabel?: string;
  metricValue?: string;
}

export interface MetricCard {
  value: string;
  label: string;
  description: string;
}
