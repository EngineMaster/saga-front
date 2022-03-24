import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { NodeParamModel } from '../node-param/node-param.model';

export interface NodeState extends EntityState<NodeParamModel, number> {
  data: string;
  observableOrSubject: any;
}

@StoreConfig({ name: 'nodesState', idKey: '_id' })
export class NodeParamStore extends EntityStore<NodeState> {
  constructor() {
    super();
  }
}
