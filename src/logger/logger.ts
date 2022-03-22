import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  public info(data: string, ...args: string[]) {
    console.log(data, args);
  }

  public warn(data: string, ...args: string[]) {
    console.warn(data, args);
  }

  public error(data: string, ...args: string[]) {
    console.error(data, args);
  }
}
