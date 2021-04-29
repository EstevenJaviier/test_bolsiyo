import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImagenState } from './imagen.state';

const getImagenState = createFeatureSelector<ImagenState>('imagenes');

export const selectGetImagenes = createSelector(
  (state: { hitState: ImagenState }) => state.hitState,
  getImagenState
);

export const selectGetImagenById = createSelector(
  (state: { hitState: ImagenState }, props: any) => {
    return state.hitState.imagenes.find((imagen) => imagen.id === props.id);
  },
  getImagenState
);
