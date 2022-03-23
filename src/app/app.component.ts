import { Component, Inject, OnInit } from '@angular/core';
import { Processor } from '../processor/processor';

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
