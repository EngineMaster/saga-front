import { Injectable } from '@angular/core';
import { Processor } from '../processor';

@Injectable()
export class SometingMakingProcessor extends Processor {

  private _availableScenarios =
    {
      firstScenario: {
        start: 'node_handle',
        nodes: {
          'node_handle': {
            success: 'node_none'
          },
          'node_none' : {
            success: 'node_end'
          }
        }
      },
    }

  override getAvailableScenarios(): object {
    return this._availableScenarios;
  }
}
