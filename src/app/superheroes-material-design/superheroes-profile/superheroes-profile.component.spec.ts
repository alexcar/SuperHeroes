import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesProfileComponent } from './superheroes-profile.component';

describe('SuperheroesProfileComponent', () => {
  let component: SuperheroesProfileComponent;
  let fixture: ComponentFixture<SuperheroesProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
