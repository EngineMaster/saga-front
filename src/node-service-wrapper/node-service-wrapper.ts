import { Logger } from '../logger/logger';
import { NodeInterface } from '../interface/node.interface';
import { NodeParamModel } from '../node-param/node-param.model';
import { take, tap } from 'rxjs';

export class NodeServiceWrapper {
  private _directions: any[] = [];

  constructor(private _node: NodeInterface) { }

  handle(nodeParam: NodeParamModel) {
    Logger.info(`Запуск ноды ${this._node.getId()}`);
    this._node.handle(nodeParam);

    this._node.nodeCompleted
      .pipe(
        take(1),
        tap(result => {
            result ? Logger.info('Успшешно') : Logger.error('Ошибка выполнения');
            const direction = result ? 'success' : 'error'
            this.next(direction, nodeParam);
        })
      )
      .subscribe()
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

    if (!nextNode) {
      nodeParam.processFinished.next(true);
      return;
    }

    Logger.info('Переходим к следующей ноде')

    nextNode.handle(nodeParam);
  }

  get Node() {
    return this._node;
  }
}
