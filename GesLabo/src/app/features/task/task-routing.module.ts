import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterTaskComponent } from './ajouter-task/ajouter-task.component';
import { DetaileTaskComponent } from './detaile-task/detaile-task.component';
import { ModifierTaskComponent } from './modifier-task/modifier-task.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
{path: 'ajouter-task', component: AjouterTaskComponent},
{path: 'detail-task', component: DetaileTaskComponent},
{path:'modifier-task', component: ModifierTaskComponent},
{path:'task-list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
