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
import { NODE_TOKEN } from '../node-service/base-node.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: NODE_TOKEN, useValue: new HandleSmthNodeService(new Logger()), multi: true},
    {provide: NODE_TOKEN, useValue: new HandleNothingNodeService(new Logger()), multi: true},
    {provide: NODE_TOKEN, useValue: new HandleEndNodeService(new Logger()), multi: true},
    Processor,
    NodeBuilder,
    Logger,
    NodeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
