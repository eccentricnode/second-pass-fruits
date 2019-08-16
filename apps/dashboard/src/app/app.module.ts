import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@second-pass/core-data';
import { CoreStateModule } from '@second-pass/core-state';
import { MaterialModule } from '@second-pass/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsListComponent } from './fruits/fruits-list/fruits-list.component';
import { FruitsDetailsComponent } from './fruits/fruits-details/fruits-details.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, FruitsComponent, FruitsListComponent, FruitsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
