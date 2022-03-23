import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
    this.logger.info(this.getDescription());
    setTimeout(() => this.nodeCompleted.next(true), 2000);
  }

}
