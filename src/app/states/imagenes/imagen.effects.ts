import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PixabayService } from '../../services/pixabay.service';
import * as ImagenActions from './imagen.actions';

@Injectable()
export class ImagenEffects {
  constructor(
    private actions$: Actions,
    private pixabayService: PixabayService
  ) {}

  loadImagenes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImagenActions.getImagenes),
      mergeMap((action) => {
        return this.pixabayService
          .getImagenesByQuery({ q: action.q, category: action.category })
          .pipe(
            map((data) =>
              ImagenActions.getImagenesSuccess({ imagenes: data.hits })
            ),
            catchError((error) =>
              of(
                ImagenActions.getImagenesFailure({ errMessage: error.message })
              )
            )
          );
      })
    )
  );
}
