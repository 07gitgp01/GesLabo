import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagerieComponent } from './messagerie.component';

const routes: Routes = [
  {path: 'message', component:MessagerieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagerieRoutingModule { }
