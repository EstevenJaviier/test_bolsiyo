import { Action, createReducer, on } from '@ngrx/store';
import * as ImagenActions from './imagen.actions';
import { ImagenState, initialState } from './imagen.state';

const _imagenReducer = createReducer(
  initialState,
  on(ImagenActions.getImagenesSuccess, (state, action) => ({
    ...state,
    imagenes: action.imagenes,
  })),
  on(ImagenActions.getImagenesFailure, (state, action) => ({
    ...state,
    errMessage: action.errMessage,
  })),
  on(ImagenActions.getImagenById, (state, action) => ({
    ...state,
    imagen: state.imagenes.find((imagen) => imagen.id === action.id),
  }))
);

export function imagenReducer(state: ImagenState | undefined, action: Action) {
  return _imagenReducer(state, action);
}
