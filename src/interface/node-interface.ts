import { NodeParamModel } from '../node-param/node-param.model';
import { Subject } from 'rxjs';

export interface NodeInterface {
  nodeCompleted: Subject<boolean>;
  /** Обработка логики в ноде*/
  handle(param: NodeParamModel): void;
  /** Получение данных о ноде в логгере */
  getDescription(): string;
  /** Получение айди ноды в логгере*/
  getId(): number;
}
