import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Imagen } from 'src/app/interfaces/imagen.interface';

export interface ImagenState extends EntityState<Imagen> {
  imagenes: Imagen[];
  imagen: Imagen;
  errMessage: string;
}

export const imagenesAdapter = createEntityAdapter<Imagen>({});

export const initialState: ImagenState = imagenesAdapter.getInitialState({
  imagenes: [],
  imagen: null,
  errMessage: null,
});
