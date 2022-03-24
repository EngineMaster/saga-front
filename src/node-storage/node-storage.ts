import { Injectable } from '@angular/core';
import { NodeInterface } from '../interface/node-interface';
import { NodeServiceWrapper } from '../node-service-wrapper/node-service-wrapper';
import { Logger } from '../logger/logger';
import { NodeParamStore } from './node-param';
import { NodeParamQuery } from './query/node-param.query';
import { HandleSmthNodeService } from '../node-service/nodes/handle-smth.node.service';
import { HandleNothingNodeService } from '../node-service/nodes/handle-nothing.node.service';
import { HandleEndNodeService } from '../node-service/nodes/handle-end.node.service';

export interface NodeStorageInterface {
  alias: string;
  instance: NodeServiceWrapper;
}

@Injectable()
export class NodeStorage {

  private _availableNodes: NodeInterface[];
  private readonly _nodes: NodeStorageInterface[];

  constructor(
    protected logger: Logger,
    protected nodeStore: NodeParamStore,
    protected nodeQuery: NodeParamQuery,
  ) {
    this._availableNodes = [
      new HandleSmthNodeService(this.logger, this.nodeStore, this.nodeQuery),
      new HandleNothingNodeService(this.logger, this.nodeStore, this.nodeQuery),
      new HandleEndNodeService(this.logger)
    ];
    this._nodes = this._availableNodes.map(node => {
      return {
        alias: node.nodeName,
        instance: new NodeServiceWrapper(this.logger, node)
      } as NodeStorageInterface;
    });
  }

  public getNodes() {
    return this._nodes;
  }
}
