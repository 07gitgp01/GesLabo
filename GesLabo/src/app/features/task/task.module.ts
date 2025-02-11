import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { DetaileTaskComponent } from './detaile-task/detaile-task.component';
import { AjouterTaskComponent } from './ajouter-task/ajouter-task.component';
import { ModifierTaskComponent } from './modifier-task/modifier-task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    DetaileTaskComponent,
    AjouterTaskComponent,
    ModifierTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
