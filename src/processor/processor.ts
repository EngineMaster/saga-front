import { NodeBuilder } from '../node-builder/node-builder';
import { NodeParamModel } from '../node-param/node-param.model';
import { Logger } from '../logger/logger';
import { Injectable } from '@angular/core';

@Injectable()
export class Processor {

  constructor(
    protected nodeBuilder: NodeBuilder,
    private _logger: Logger
  ) { }

  availableScenarios = [
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
      }
    }
  ]

  public run(scenarioAlias: string) {
    const node = this.nodeBuilder.build(this.availableScenarios[0].firstScenario.start, this.availableScenarios[0].firstScenario.nodes);

    node.handle(new NodeParamModel());
  }

}
