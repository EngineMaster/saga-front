import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  public static info(data: any, ...args: string[]) {
    console.log(data, args);
  }

  public static warn(data: any, ...args: string[]) {
    console.warn(data, args);
  }

  public static error(data: any, ...args: string[]) {
    console.error(data, args);
  }

}
