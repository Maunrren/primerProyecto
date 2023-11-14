import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaAutorComponent } from './carta-autor.component';

describe('CartaAutorComponent', () => {
  let component: CartaAutorComponent;
  let fixture: ComponentFixture<CartaAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaAutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
