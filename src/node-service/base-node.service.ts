import { NodeInterface } from '../interface/node-interface';
import { NodeParamModel } from '../node-param/node-param.model';
import { InjectionToken } from '@angular/core';
import { Logger } from '../logger/logger';

// export const NODE_TOKEN = new InjectionToken<NodeInterface>('NODE');

export abstract class BaseNodeService {
  abstract readonly nodeNode: string;

  constructor(protected logger: Logger) { }

  abstract getDescription(): string;

  abstract getId(): number;

  abstract handle(param: NodeParamModel): void;

}
