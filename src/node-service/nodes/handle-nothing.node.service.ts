import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node.interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { interval, Subject, switchMap, take, tap } from 'rxjs';
import { Logger } from '../../logger/logger';

@Injectable()
export class HandleNothingNodeService extends BaseNodeService implements NodeInterface {
  public readonly nodeName: string = 'node_none';
  public nodeCompleted = new Subject<boolean>();

  getDescription(): string {
    return 'Здесь выводится следующая нода';
  }

  getId(): number {
    return 2;
  }

  handle(param: NodeParamModel): void {
    Logger.info(this.getDescription());
    // @ts-ignore
    param.getObject('obser').value.observable
      .pipe(
        switchMap(() => interval(5000))
      );
    setTimeout(() => this.nodeCompleted.next(true), 1000);
  }

}
