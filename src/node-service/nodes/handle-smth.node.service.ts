import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HandleSmthNodeService extends BaseNodeService implements NodeInterface {
  public readonly nodeNode: string = 'node_handle';
  public nodeCompleted = new Subject<boolean>();

  getDescription(): string {
    return 'Что-то хэндлим';
  }

  getId(): number {
    return 1;
  }

  handle(param: NodeParamModel): void {
    this.logger.info(this.getDescription());
    setTimeout(() => this.nodeCompleted.next(true), 2000);
  }

}
