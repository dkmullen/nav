import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMainComponent } from './navigation/sidenav-main/sidenav-main.component';
import { SidenavSecondaryComponent } from './navigation/sidenav-secondary/sidenav-secondary.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SidenavMainComponent,
    SidenavSecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
