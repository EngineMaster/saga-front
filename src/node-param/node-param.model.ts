export interface StorageClassInterface {
  name: string;
  classValue: any;
}

export class NodeParamModel {
  public data: any;
  public observable: any;


  constructor(
    private paramData: string,
    private observableOrSubject: any
  ) {
    this.data = paramData;
    this.observable = observableOrSubject;
  }

  get Data() {
    return this.data;
  }

  get Observable() {
    return this.observable;
  }

}
