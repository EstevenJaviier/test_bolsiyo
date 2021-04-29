import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ListarImagenesComponent } from './pages/listar-imagenes/listar-imagenes.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallesImagenComponent } from './pages/detalles-imagen/detalles-imagen.component';

import { fromRoot } from './states/imagenes';
import { ImgLazyDirective } from './directives/img-lazy.directive';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListarImagenesComponent,
    SearchComponent,
    NavbarComponent,
    DetallesImagenComponent,
    ImgLazyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ imagenes: fromRoot.imagenReducer }),
    EffectsModule.forRoot([fromRoot.ImagenEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
