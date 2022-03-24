import { NodeBuilder } from '../node-builder/node-builder';
import { NodeParamModel } from '../node-param/node-param.model';
import { Logger } from '../logger/logger';
import { Injectable } from '@angular/core';
import { filter, Observable, switchMap } from 'rxjs';
import { ProcessorResultModel } from '../processor-result/processor-result.model';

@Injectable()
export abstract class Processor {

  constructor(
    protected nodeBuilder: NodeBuilder,
    private _logger: Logger,
  ) { }


  public run(scenarioAlias: string): Observable<any> {
    // @ts-ignore
    const scenarioIsNotValid = !this.getAvailableScenarios()[scenarioAlias]?.start || !this.getAvailableScenarios()[scenarioAlias]?.nodes;

    // @ts-ignore
    if (!this.getAvailableScenarios()[scenarioAlias] || scenarioIsNotValid) {
      return new Observable<any>(subscriber => {
        this._logger.info('Неверное имя сценария');
        subscriber.next({error: 'Сценарий не существует'});
      });
    }

    // @ts-ignore
    const scenario = this.getAvailableScenarios()[scenarioAlias];

    const node = this.nodeBuilder.build(
      // @ts-ignore
      scenario.start,
      // @ts-ignore
      scenario.nodes
    );

    const param = new NodeParamModel(new ProcessorResultModel());

    node.handle(param);

    return param.processFinished
      .pipe(
        filter(finished => finished === true),
        switchMap(() => param.getProcessorResult().getData()),
      );
  }

  abstract getAvailableScenarios(): object;

}
