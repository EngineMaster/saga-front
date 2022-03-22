export interface StorageClassInterface {
  name: string;
  classValue: any;
}

export class NodeParamModel {
  private storage: StorageClassInterface[] = [];

  public getObjectByClass(classToGet: string) {
    const indexOfClass = this.storage.map(object => object.name).indexOf(classToGet)
    return this.storage[indexOfClass];
  }

  public setObject(objectName: string, object: any) {
    this.storage.push({name: objectName, classValue: object});
  }
}
