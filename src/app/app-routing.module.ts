import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompComponent } from './rxjs_example/sharingbetweencomponent/acomp/acomp.component';
import { BcompComponent } from './rxjs_example/sharingbetweencomponent/bcomp/bcomp.component';


const routes: Routes = [
  {
    path: 'acomp', component: AcompComponent
  },
  {
    path: 'bcomp', component: BcompComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
