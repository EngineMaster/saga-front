import { of } from 'rxjs';

export enum ProcessorResultStatus {
  'Success',
  'Error',
  'Exception'
}

export class ProcessorResultModel {
  private _data?: string;
  private _status?: ProcessorResultStatus;

  setData(data: any) {
    this._data = JSON.stringify(data);
  }

  setStatus(status: ProcessorResultStatus) {
    this._status = status;
  }

  getData() {
    return of(JSON.parse(<string>this._data));
  }

  getStatus() {
    return this._status;
  }
}

