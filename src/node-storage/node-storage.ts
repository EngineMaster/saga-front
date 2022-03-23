import { Inject, Injectable } from '@angular/core';
import { NodeInterface } from '../interface/node-interface';
import { NodeServiceWrapper } from '../node-service-wrapper/node-service-wrapper';
import { Logger } from '../logger/logger';
import { NODE_TOKEN } from '../node-service/base-node.service';

export interface NodeStorageInterface {
  alias: string;
  instance: NodeServiceWrapper;
}

@Injectable()
export class NodeStorage {
  private readonly _nodes;

  constructor(
    protected logger: Logger,
    @Inject(NODE_TOKEN) public injectedNodes: NodeInterface[]
  ) {
    this._nodes = this.injectedNodes.map(n => {
      return {
        // @ts-ignore
        alias: n.nodeName,
        // @ts-ignore
        instance: new NodeServiceWrapper(this.logger, n)
      } as NodeStorageInterface;
    })
  }


  public getNodes() {
    // @ts-ignore
    return this._nodes;
  }
}
