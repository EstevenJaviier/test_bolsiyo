import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImagenState } from './imagen.state';

const getImagenState = createFeatureSelector<ImagenState>('imagenes');

export const selectGetImagenes = createSelector(
  (state: { imagenState: ImagenState }) => state.imagenState,
  getImagenState
);

export const selectGetImagenById = createSelector(
  (state: { imagenState: ImagenState }, props: any) => {
    return state.imagenState.imagenes.find((imagen) => imagen.id === props.id);
  },
  getImagenState
);
