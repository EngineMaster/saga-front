import { BaseNodeService } from '../base-node.service';
import { NodeInterface } from '../../interface/node-interface';
import { NodeParamModel } from '../../node-param/node-param.model';
import { Injectable } from '@angular/core';
import { interval, Subject, switchMap, take, tap } from 'rxjs';
import { Logger } from '../../logger/logger';
import { SomeObservableDto } from '../../DTOs/some-observable-dto/some-observable.dto';

@Injectable()
export class HandleSmthNodeService extends BaseNodeService implements NodeInterface {
  public readonly nodeName: string = 'node_handle';
  public nodeCompleted = new Subject<boolean>();

  constructor(
    logger: Logger,
  ) {
    super(logger);
  }

  getDescription(): string {
    return 'Что-то хэндлим';
  }

  getId(): number {
    return 1;
  }

  handle(param: NodeParamModel): void {
    this.logger.info(this.getDescription());
    const someRequest = interval(3000).pipe(
      tap(completes => {
        this.nodeCompleted.next(true);
      }),
      switchMap(() => interval(1000)),
      take(1)
    );
    param.setObject('obser', new SomeObservableDto(someRequest));
    someRequest.subscribe(() => this.nodeCompleted.next(true));
  }

}
