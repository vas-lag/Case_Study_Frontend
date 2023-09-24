import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { FirstTaskComponent } from './first-task/first-task.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ThirdTaskComponent } from './third-task/third-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FirstTaskComponent,
    CountryLanguagesComponent,
    SecondTaskComponent,
    NavigationMenuComponent,
    ThirdTaskComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
