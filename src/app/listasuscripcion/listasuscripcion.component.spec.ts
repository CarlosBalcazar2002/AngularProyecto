import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasuscripcionComponent } from './listasuscripcion.component';

describe('ListasuscripcionComponent', () => {
  let component: ListasuscripcionComponent;
  let fixture: ComponentFixture<ListasuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasuscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
