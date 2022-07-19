import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {path:'content',component:ContentComponent,title:'Card'},
  {path:'request',component:RequestComponent,title:'Login'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
