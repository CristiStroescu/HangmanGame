import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAndStatsComponent } from './draw-and-stats.component';

describe('DrawAndStatsComponent', () => {
  let component: DrawAndStatsComponent;
  let fixture: ComponentFixture<DrawAndStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawAndStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawAndStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
