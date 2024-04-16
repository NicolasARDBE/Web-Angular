import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArrendadorComponent } from './eliminar-arrendador.component';

describe('EliminarArrendadorComponent', () => {
  let component: EliminarArrendadorComponent;
  let fixture: ComponentFixture<EliminarArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
