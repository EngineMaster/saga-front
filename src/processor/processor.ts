import { NodeBuilder } from '../node-builder/node-builder';
import { NodeParamModel } from '../node-param/node-param.model';
import { Logger } from '../logger/logger';
import { Injectable } from '@angular/core';
import { NodeParamQuery } from '../node-storage/query/node-param.query';
import { Subject } from 'rxjs';

@Injectable()
export class Processor {

  constructor(
    protected nodeBuilder: NodeBuilder,
    private _logger: Logger,
  ) { }

  availableScenarios =
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
      secondScenario: {

      }
    }


  public run(scenarioAlias: string) {
    // @ts-ignore
    if (!this.availableScenarios[scenarioAlias]) {
      return;
    }
    const node = this.nodeBuilder.build(
      // @ts-ignore
      this.availableScenarios[scenarioAlias].start,
      // @ts-ignore
      this.availableScenarios[scenarioAlias].nodes
    );
    node.handle(new NodeParamModel('DATA 2', new Subject()));
  }

}
