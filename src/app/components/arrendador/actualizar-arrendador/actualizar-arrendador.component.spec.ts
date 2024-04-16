import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArrendadorComponent } from './actualizar-arrendador.component';

describe('ActualizarArrendadorComponent', () => {
  let component: ActualizarArrendadorComponent;
  let fixture: ComponentFixture<ActualizarArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
