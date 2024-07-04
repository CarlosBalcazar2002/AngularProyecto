import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsbuscadorComponent } from './cardsbuscador.component';

describe('CardsbuscadorComponent', () => {
  let component: CardsbuscadorComponent;
  let fixture: ComponentFixture<CardsbuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsbuscadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsbuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
