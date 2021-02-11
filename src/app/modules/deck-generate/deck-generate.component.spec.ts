import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckGenerateComponent } from './deck-generate.component';

describe('DeckGenerateComponent', () => {
  let component: DeckGenerateComponent;
  let fixture: ComponentFixture<DeckGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
