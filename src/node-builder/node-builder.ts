import { Logger } from '../logger/logger';
import { NodeServiceWrapper } from '../node-service-wrapper/node-service-wrapper';
import { NodeStorage } from '../node-storage/node-storage';
import { Injectable } from '@angular/core';

@Injectable()
export class NodeBuilder {

  constructor(
    private _logger: Logger,
    private nodeStorage: NodeStorage
  ) {
  }

  build(start: string, nodes: any) {
    Logger.info('Запуск процессора');

    Object.keys(nodes).forEach(n => {
      const directions: any = [];

      const node = this._getNodeClass(n);

      Object.keys(nodes[n]).forEach(direction => {
          directions.push({direction, value: this._getNodeClass(nodes[n][direction])})
      })

      node.setDirections(directions);
    })

    const startNode = this._getNodeClass(start);

    Logger.info('Сбилдили ноды, выполняем логику нод');
    return startNode;
  }


  private _getNodeClass(instance: string): NodeServiceWrapper {
    // @ts-ignore
    return this.nodeStorage.getNodes().find(node => node.alias === instance).instance;
  }

}
