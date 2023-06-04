import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessOfPlayerComponent } from './guess-of-player.component';

describe('GuessOfPlayerComponent', () => {
  let component: GuessOfPlayerComponent;
  let fixture: ComponentFixture<GuessOfPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessOfPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessOfPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
