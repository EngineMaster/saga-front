import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandleSmthNodeService } from '../node-service/nodes/handle-smth.node.service';
import { Processor } from '../processor/processor';
import { HandleNothingNodeService } from '../node-service/nodes/handle-nothing.node.service';
import { NodeBuilder } from '../node-builder/node-builder';
import { Logger } from '../logger/logger';
import { NodeStorage } from '../node-storage/node-storage';
import { HandleEndNodeService } from '../node-service/nodes/handle-end.node.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'FIRST_NODE', useValue: new HandleSmthNodeService(new Logger())},
    {provide: 'SECOND_NODE', useValue: new HandleNothingNodeService(new Logger())},
    {provide: 'THIRD_NODE', useValue: new HandleEndNodeService(new Logger())},
    Processor,
    NodeBuilder,
    Logger,
    NodeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
