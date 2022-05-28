import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Pagina404ComponentComponent } from './components/pagina404-component/pagina404-component.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: Pagina404ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
