import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { Subject, take, tap } from 'rxjs';
import { Logger } from '../../logger/logger';

@Injectable()
export class HandleNothingNodeService extends BaseNodeService implements NodeInterface {
  public readonly nodeName: string = 'node_none';
  public nodeCompleted = new Subject<boolean>();

  constructor(_logger: Logger) {
    super(_logger);
  }

  getDescription(): string {
    return 'Здесь выводится следующая нода';
  }

  getId(): number {
    return 2;
  }

  handle(param: NodeParamModel): void {
    this.logger.info(this.getDescription());
    // @ts-ignore
    param.getObject('obser').value.observable
      .subscribe((v: any) => {
        param.getProcessorResult().setData({finishedProcessorData: 'someData'});
        this.nodeCompleted.next(true);
      });
  }

}
