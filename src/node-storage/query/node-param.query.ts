import { Query } from '@datorama/akita';
import { NodeParamStore } from '../node-param';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NodeParamQuery extends Query<NodeParamStore> {
  constructor(store: NodeParamStore) {
    // @ts-ignore
    super(store);
  }

  public allState$ = this.select();
}
