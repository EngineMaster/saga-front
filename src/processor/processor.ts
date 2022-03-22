import { NodeBuilder } from '../node-builder/node-builder';
import { NodeParamModel } from '../node-param/node-param.model';
import { Logger } from '../logger/logger';
import { Injectable } from '@angular/core';

@Injectable()
export class Processor {
  constructor(protected nodeBuilder: NodeBuilder, private _logger: Logger) { }

  private _firstScenario = {
    start: 'firstNode',
    nodes: {
      'firstNode': {
        success: 'secondNode'
      },
      'secondNode' : {
        success: 'thirdNode'
      }
    }
  }

  public run(scenario: string) {
    const node = this.nodeBuilder.build(this._firstScenario.start, this._firstScenario.nodes);
    node.handle(new NodeParamModel());
  }

}
