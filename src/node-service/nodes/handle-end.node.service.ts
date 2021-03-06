import { Injectable } from '@angular/core';
import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node.interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Subject } from 'rxjs';
import { Logger } from '../../logger/logger';

@Injectable()
export class HandleEndNodeService extends BaseNodeService implements NodeInterface {
  public nodeName: string = 'node_end';
  public nodeCompleted = new Subject<boolean>();


  getDescription(): string {
    return 'Концовка процессора и завершается весь процесс';
  }

  getId(): number {
    return 3;
  }

  handle(param: NodeParamModel): void {
    Logger.info(this.getDescription());
    // @ts-ignore
    param.getObject('obser').value.observable.subscribe(() => {
      param.getProcessorResult().setData({finishedProcessorData: 'someData'})
      this.nodeCompleted.next(true);
    });
  }

}
