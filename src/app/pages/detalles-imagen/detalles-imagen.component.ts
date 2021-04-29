import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Imagen } from 'src/app/interfaces/imagen.interface';
import { fromRoot } from 'src/app/states/imagenes';
import { ImagenState } from 'src/app/states/imagenes/imagen.state';

@Component({
  templateUrl: './detalles-imagen.component.html',
  styleUrls: ['./detalles-imagen.component.css'],
})
export class DetallesImagenComponent implements OnInit {
  imagen$: Observable<{ imagen: Imagen }>;
  imagen: Imagen;
  imagenId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ imagenes: ImagenState }>
  ) {
    this.imagen$ = this.store.select((state) => state.imagenes);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.imagenId = +params.get('id');
      this.store.dispatch(fromRoot.getImagenById({ id: this.imagenId }));
    });

    this.imagen$.subscribe((data) => {
      this.imagen = data.imagen;
      if (!this.imagen) {
        this.router.navigate(['/'], { preserveFragment: true });
      }
    });
  }

  /**
   * Puesto que en la consulta se obtiene un string de los tags
   * se aplica la funcion split para separalos y poder imprimirlos individualmente
   */
  handlerTags(tags: string) {
    return tags?.split(',');
  }
}
