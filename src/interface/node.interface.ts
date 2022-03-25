import { NodeParamModel } from '../node-param/node-param.model';
import { Subject } from 'rxjs';

export interface NodeInterface {
  /** alias Ноды */
  nodeName: string;
  /** Индикатор завершённости выполнения логики в ноде */
  nodeCompleted: Subject<boolean>;
  /** Обработка логики в ноде*/
  handle(param: NodeParamModel): void;
  /** Получение данных о ноде в логгере */
  getDescription(): string;
  /** Получение айди ноды в логгере*/
  getId(): number;
}
