import { NodeParamModel } from '../node-param/node-param.model';
import { NodeInterface } from '../interface/node.interface';
import { InjectionToken } from '@angular/core';

export const NODE_TOKEN = new InjectionToken<NodeInterface>('NODE');

export abstract class BaseNodeService {

  abstract getDescription(): string;

  abstract getId(): number;

  abstract handle(param: NodeParamModel): void;

}
