import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { ThirdTaskComponent } from './third-task/third-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/1', component: FirstTaskComponent },
  { path: 'tasks/2', component: SecondTaskComponent },
  { path: 'tasks/3', component: ThirdTaskComponent },
  { path: 'countries/:id/languages', component: CountryLanguagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
