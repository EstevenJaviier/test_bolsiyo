import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesImagenComponent } from './pages/detalles-imagen/detalles-imagen.component';
import { ListarImagenesComponent } from './pages/listar-imagenes/listar-imagenes.component';

const routes: Routes = [
  { path: '', component: ListarImagenesComponent },
  { path: ':id', component: DetallesImagenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
