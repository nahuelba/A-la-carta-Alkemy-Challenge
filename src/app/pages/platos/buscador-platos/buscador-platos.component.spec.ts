import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPlatosComponent } from './buscador-platos.component';

describe('BuscadorPlatosComponent', () => {
  let component: BuscadorPlatosComponent;
  let fixture: ComponentFixture<BuscadorPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
