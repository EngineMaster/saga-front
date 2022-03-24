import { ProcessorResultModel } from '../processor-result/processor-result.model';
import { Subject } from 'rxjs';

export interface StorageClassInterface {
  name: string;
  classValue: any;
}

export interface ObjectDataInterface {
  key: string;
  value: any;
}

export class NodeParamModel {

  processFinished = new Subject();
  objects?: ObjectDataInterface[] = [];

  constructor(
    private processorResult: ProcessorResultModel
  ) {
  }

  getObject(key: string): ObjectDataInterface | false {
    // @ts-ignore
    const object = this.objects.find(o => o.key === key);
    if (!object) {
      return false;
    }
    return object;
  }

  setObject(key: string, object: any) {
    // @ts-ignore
    this.objects.push({key, value: object});
  }

  getProcessorResult() {
    return this.processorResult;
  }

}
