import { Logger } from '../logger/logger';
import { NodeInterface } from '../interface/node-interface';
import { NodeParamModel } from '../node-param/node-param.model';
import { take, tap } from 'rxjs';

export class NodeServiceWrapper {
  private _directions: any[] = [];

  constructor(private _logger: Logger, private _node: NodeInterface) { }

  handle(nodeParam: NodeParamModel) {
    this._logger.info(`Запуск ноды ${this._node.getId()}`);
    this._node.handle(nodeParam);
    this._node.nodeCompleted.pipe(
      tap(result => {
          result ? this._logger.info('Успшешно') : this._logger.error('Ошибка выполнения');
          const direction = result ? 'success' : 'error'
          this.next(direction, nodeParam);
      })
    ).subscribe()
  }

  public setDirections(directions: any[]): void {
    this._directions = directions;
  }

  public getDirections() {
    return this._directions;
  }

  protected has(direction: string) {
    // @ts-ignore
    return this._directions[direction] ?? false;
  }

  protected next(direction: string, nodeParam: NodeParamModel): void {
    const nextNode = this._directions.filter(d => d.direction === direction)[0]?.value ?? null;

    this._logger.info('starting next node')

    if (!nextNode) {
      return;
    }

    nextNode.handle(nodeParam);
  }

  get Node() {
    return this._node;
  }
}
