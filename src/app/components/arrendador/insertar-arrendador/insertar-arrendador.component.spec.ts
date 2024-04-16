import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarArrendadorComponent } from './insertar-arrendador.component';

describe('InsertarArrendadorComponent', () => {
  let component: InsertarArrendadorComponent;
  let fixture: ComponentFixture<InsertarArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
