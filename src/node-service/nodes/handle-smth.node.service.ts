import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Logger } from '../../logger/logger';
import { NodeParamStore } from '../../node-storage/node-param';
import { NodeParamQuery } from '../../node-storage/query/node-param.query';

@Injectable()
export class HandleSmthNodeService extends BaseNodeService implements NodeInterface {
  public readonly nodeName: string = 'node_handle';
  public nodeCompleted = new Subject<boolean>();

  constructor(
    logger: Logger,
    private nodeParamStore: NodeParamStore,
    private _nodeParam: NodeParamQuery
  ) {
    super(logger);
  }

  getDescription(): string {
    return 'Что-то хэндлим';
  }

  getId(): number {
    return 1;
  }

  handle(param: NodeParamModel): void {
    this.logger.info(this.getDescription());
    this.nodeParamStore.set({entities: new NodeParamModel('stored', new BehaviorSubject('SomeData'))});
    setTimeout(() => this.nodeCompleted.next(true), 2000);
  }

}
