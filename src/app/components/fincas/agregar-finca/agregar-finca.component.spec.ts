import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFincaComponent } from './agregar-finca.component';

describe('AgregarFincaComponent', () => {
  let component: AgregarFincaComponent;
  let fixture: ComponentFixture<AgregarFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarFincaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
