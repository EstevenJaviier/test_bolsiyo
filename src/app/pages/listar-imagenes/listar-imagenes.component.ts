import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Imagen } from 'src/app/interfaces/imagen.interface';
import { fromRoot } from 'src/app/states/imagenes';
import { ImagenState } from 'src/app/states/imagenes/imagen.state';

@Component({
  templateUrl: './listar-imagenes.component.html',
  styleUrls: ['./listar-imagenes.component.css'],
})
export class ListarImagenesComponent implements OnInit {
  q: string;
  imagenes$: Observable<{ imagenes: Imagen[] }>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ imagenes: ImagenState }>
  ) {
    this.imagenes$ = this.store.select((state) => state.imagenes);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.q = params.get('q');
      this.store.dispatch(
        fromRoot.getImagenes({
          q: params.get('q'),
          category: params.get('category'),
        })
      );
    });
  }

  handlerTags(tags: string) {
    return tags?.split(',');
  }
}
