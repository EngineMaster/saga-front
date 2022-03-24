import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Logger } from '../../logger/logger';
import { NodeParamStore } from '../../node-storage/node-param';
import { NodeParamQuery } from '../../node-storage/query/node-param.query';

@Injectable()
export class HandleNothingNodeService extends BaseNodeService implements NodeInterface {
  public readonly nodeName: string = 'node_none';
  public nodeCompleted = new Subject<boolean>();

  constructor(_logger: Logger, private nodeParamStore: NodeParamStore, private _nodeParam: NodeParamQuery) {
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
    this._nodeParam.allState$.subscribe(state => setTimeout(() => this.nodeCompleted.next(true), 3));
  }

}
