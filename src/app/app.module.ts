import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleItems } from './modules/items/app.module';
import { AppModuleCommons } from './modules/commons/app.module';
import { AppModuleAuth } from './modules/auth/app.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppModuleMenu } from './modules/menu/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppModuleMenu,
    AppModuleAuth,
    AppModuleCommons,
    AppModuleItems,
    AppModuleAdmin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
