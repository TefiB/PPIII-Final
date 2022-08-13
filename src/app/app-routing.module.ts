import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisprestamosComponent } from './user/misprestamos/misprestamos.component';

const routes: Routes = [
  {path: 'user/misprestamos',
  component: MisprestamosComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
