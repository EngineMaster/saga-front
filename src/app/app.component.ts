import { Component, OnInit } from '@angular/core';
import { SometingMakingProcessor } from '../processor/processors/someting-making.processor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private title = 'Chain of Responsibility Pattern';

  constructor(private _processor: SometingMakingProcessor) { }

  public ngOnInit() {
    this._processor.run('firstScenario').subscribe(data => console.log(data));;
  }

  public getAppTitle() {
    return this.title;
  }
}
