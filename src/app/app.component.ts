import { Component, Inject, OnInit } from '@angular/core';
import { Processor } from '../processor/processor';
import { NodeBuilder } from '../node-builder/node-builder';
import { Logger } from '../logger/logger';
import { NodeStorage } from '../node-storage/node-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AbankingTestApp';

  constructor(private _processor: Processor) { }

  ngOnInit() {
    this._processor.run('firstScenario');
  }
}
