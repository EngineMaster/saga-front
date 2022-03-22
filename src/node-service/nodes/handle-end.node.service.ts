import { Injectable } from '@angular/core';
import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Subject } from 'rxjs';

@Injectable()
export class HandleEndNodeService extends BaseNodeService implements NodeInterface {
  readonly nodeNode: string = 'end_node';
  public nodeCompleted = new Subject<boolean>();

  getDescription(): string {
    return 'Концовка процессора и завершается весь процесс';
  }

  getId(): number {
    return 3;
  }

  handle(param: NodeParamModel): void {
    this.logger.info(this.getDescription());
    setTimeout(() => this.nodeCompleted.next(true), 2000);
  }

}
