import { IRushPlugin, RushSession, RushConfiguration } from '@rushstack/rush-sdk'
import { writeCustomTelemetry } from './util'

export interface IRushFlushTelemetryExamplePlugin {}

export class RushFlushTelemetryExamplePlugin implements IRushPlugin {
  public readonly pluginName = 'rush-flush-telemetry-example-plugin'
  public constructor(options: IRushFlushTelemetryExamplePlugin) {
  }

  apply(rushSession: RushSession, rushConfiguration: RushConfiguration): void {
    rushSession.hooks.flushTelemetry.tapAsync(this.pluginName, async (telemetry, callback) => {
      try {
        writeCustomTelemetry('custom-success', {})
      } catch (e) {
        writeCustomTelemetry('custom-failure', {})
      } finally {
        writeCustomTelemetry('custom-finally', {})
      }
    })
  }
}

export default RushFlushTelemetryExamplePlugin
