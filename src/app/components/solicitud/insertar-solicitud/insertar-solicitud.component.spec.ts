import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarSolicitudComponent } from './insertar-solicitud.component';

describe('InsertarSolicitudComponent', () => {
  let component: InsertarSolicitudComponent;
  let fixture: ComponentFixture<InsertarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
