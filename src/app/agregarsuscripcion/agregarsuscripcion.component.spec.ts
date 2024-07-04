import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarsuscripcionComponent } from './agregarsuscripcion.component';

describe('AgregarsuscripcionComponent', () => {
  let component: AgregarsuscripcionComponent;
  let fixture: ComponentFixture<AgregarsuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarsuscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarsuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
