import { Component, Inject, OnInit } from '@angular/core';
import { Processor } from '../processor/processor';
import { HandleSmthNodeService } from '../node-service/nodes/handle-smth.node.service';
import { HandleNothingNodeService } from '../node-service/nodes/handle-nothing.node.service';
import { HandleEndNodeService } from '../node-service/nodes/handle-end.node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    HandleSmthNodeService,
    HandleNothingNodeService,
    HandleEndNodeService
  ]
})
export class AppComponent implements OnInit {
  title = 'AbankingTestApp';

  constructor(private _processor: Processor) { }

  ngOnInit() {
    this._processor.run('firstScenario');
  }
}
