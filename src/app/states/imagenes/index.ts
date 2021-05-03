import {
  getImagenes,
  getImagenesSuccess,
  getImagenById,
  getImagenesFailure,
} from './imagen.actions';
import { ImagenEffects } from './imagen.effects';
import { imagenReducer } from './imagen.reducer';
import {
  selectCurrentImagen,
  selectImagenId,
  selectImagenes,
} from './imagen.selector';

export const fromImagen = {
  imagenReducer,
  ImagenEffects,
  getImagenes,
  getImagenesSuccess,
  getImagenById,
  getImagenesFailure,
  selectCurrentImagen,
  selectImagenId,
  selectImagenes,
};
