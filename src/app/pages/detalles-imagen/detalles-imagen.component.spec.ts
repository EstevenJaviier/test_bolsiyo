import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesImagenComponent } from './detalles-imagen.component';

describe('DetallesImagenComponent', () => {
  let component: DetallesImagenComponent;
  let fixture: ComponentFixture<DetallesImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesImagenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
