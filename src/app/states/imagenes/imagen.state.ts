import { Imagen } from 'src/app/interfaces/imagen.interface';

export interface ImagenState {
  imagenes: Imagen[];
  imagenId: number;
  errMessage: string;
}

export const initialState: ImagenState = {
  imagenes: [],
  imagenId: null,
  errMessage: null,
};
