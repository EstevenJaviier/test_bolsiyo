import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  formSearch: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      q: [null, [Validators.maxLength(100)]],
      category: [null],
    });

    /**
     * hago uso de queryParamMap para hacer la consulta dinamicamente segun cambien los parametros
     * en la url
     */

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.formSearch.patchValue({
        q: params.get('q'),
        category: params.get('category'),
      });
    });
  }

  onSubmit() {
    /**
     * Se verifica que el texto ingresado para la busqueda no exceda un máximo 100 caracteres
     */
    const q = this.formSearch.get('q').value;
    if (q?.length > 100) {
      return alert('La busqueda debe ser de máximo 100 caracteres.');
    }

    this.router.navigate(['/'], {
      queryParams: {
        q: q,
        category: this.formSearch.get('category').value,
      },
    });
  }
}
