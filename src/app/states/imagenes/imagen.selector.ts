import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImagenState } from './imagen.state';

const getImagenState = createFeatureSelector<ImagenState>('imagenes');

export const selectImagenes = createSelector(
  getImagenState,
  (state: ImagenState) => state.imagenes
);

export const selectImagenId = createSelector(
  getImagenState,
  (state: ImagenState) => state.imagenId
);

export const selectCurrentImagen = createSelector(
  getImagenState,
  selectImagenId,
  (state: ImagenState, id: number) => {
    return state.imagenes.find((imagen) => imagen.id === id);
  }
);
