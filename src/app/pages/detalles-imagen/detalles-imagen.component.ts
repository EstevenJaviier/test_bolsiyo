import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Imagen } from 'src/app/interfaces/imagen.interface';
import { fromImagen } from 'src/app/states/imagenes';

@Component({
  templateUrl: './detalles-imagen.component.html',
  styleUrls: ['./detalles-imagen.component.css'],
})
export class DetallesImagenComponent implements OnInit {
  imagen: Imagen;
  imagenId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.imagenId = +params.get('id');
      this.store.dispatch(fromImagen.getImagenById({ id: this.imagenId }));
    });

    this.store.select(fromImagen.selectCurrentImagen).subscribe((imagen) => {
      if (!imagen) {
        this.router.navigate(['/'], { preserveFragment: true });
      }
      this.imagen = imagen;
    });
  }

  /**
   * Puesto que en la consulta se obtiene un string de los tags
   * se aplica la funcion split para separalos y poder imprimirlos individualmente
   */
  handlerTags(tags: string) {
    return tags?.split(',');
  }
}
