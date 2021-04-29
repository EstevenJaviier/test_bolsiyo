import {
  getImagenes,
  getImagenesSuccess,
  getImagenById,
  getImagenesFailure,
} from './imagen.actions';
import { ImagenEffects } from './imagen.effects';
import { imagenReducer } from './imagen.reducer';
import { selectGetImagenById, selectGetImagenes } from './imagen.selector';

export const fromRoot = {
  getImagenes,
  getImagenesSuccess,
  ImagenEffects,
  imagenReducer,
  getImagenById,
  getImagenesFailure,
  selectGetImagenById,
  selectGetImagenes,
};
