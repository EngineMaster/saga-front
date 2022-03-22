import { Inject, Injectable } from '@angular/core';
import { NodeInterface } from '../interface/node-interface';
import { NodeServiceWrapper } from '../node-service-wrapper/node-service-wrapper';
import { Logger } from '../logger/logger';

@Injectable()
export class NodeStorage {

  constructor(
    protected logger: Logger,
    @Inject('FIRST_NODE') public firstNodeName: NodeInterface,
    @Inject('SECOND_NODE') public secondNodeName: NodeInterface,
    @Inject('THIRD_NODE') public thirdNodeName: NodeInterface
  ) {
  }

  public nodes = [
    {alias: 'firstNode', value: new NodeServiceWrapper(this.logger, this.firstNodeName)},
    {alias: 'secondNode', value: new NodeServiceWrapper(this.logger, this.secondNodeName)},
    {alias: 'thirdNode', value: new NodeServiceWrapper(this.logger, this.thirdNodeName)}
  ]
}
