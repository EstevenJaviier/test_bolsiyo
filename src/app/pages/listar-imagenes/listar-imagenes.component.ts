import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Imagen } from 'src/app/interfaces/imagen.interface';
import { fromImagen } from 'src/app/states/imagenes';

@Component({
  templateUrl: './listar-imagenes.component.html',
  styleUrls: ['./listar-imagenes.component.css'],
})
export class ListarImagenesComponent implements OnInit {
  q: string;
  imagenes$: Observable<Imagen[]>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.imagenes$ = this.store.select(fromImagen.selectImagenes);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.q = params.get('q');
      this.store.dispatch(
        fromImagen.getImagenes({
          q: params.get('q'),
          category: params.get('category'),
        })
      );
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
