import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaArrendadorComponent } from './finca-arrendador.component';

describe('FincaArrendadorComponent', () => {
  let component: FincaArrendadorComponent;
  let fixture: ComponentFixture<FincaArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FincaArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FincaArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
