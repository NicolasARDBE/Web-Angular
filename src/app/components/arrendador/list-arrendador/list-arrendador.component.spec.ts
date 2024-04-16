import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArrendadorComponent } from './list-arrendador.component';

describe('ListArrendadorComponent', () => {
  let component: ListArrendadorComponent;
  let fixture: ComponentFixture<ListArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
