import { createAction, props } from '@ngrx/store';
import { Imagen } from 'src/app/interfaces/imagen.interface';

export const getImagenes = createAction(
  '[Imagenes] Get Imagenes',
  props<{ q: string; category: string }>()
);

export const getImagenesSuccess = createAction(
  '[Imagenes] Get Imagen Success',
  props<{ imagenes: Imagen[] }>()
);

export const getImagenesFailure = createAction(
  '[Imagenes] Get Imagen Failure',
  props<{ errMessage: string }>()
);

export const getImagenById = createAction(
  '[Imagenes] Get Imagen By Id',
  props<{ id: number }>()
);
