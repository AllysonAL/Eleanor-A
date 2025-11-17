import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Box3dComponent } from './components/box3d.component/box3d.component';
import { BoxStorageComponent } from './components/box-storage.component/box-storage.component';
import { BoxComponent } from './components/box.component/box.component';

@NgModule({
  declarations: [
    App,
    Box3dComponent,
    BoxStorageComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
