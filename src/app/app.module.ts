import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeBuilder } from '../node-builder/node-builder';
import { Logger } from '../logger/logger';
import { NodeStorage } from '../node-storage/node-storage';
import { SometingMakingProcessor } from '../processor/processors/someting-making.processor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SometingMakingProcessor,
    NodeBuilder,
    Logger,
    NodeStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
