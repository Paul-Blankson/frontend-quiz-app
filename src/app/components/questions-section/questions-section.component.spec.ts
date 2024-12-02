import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSectionComponent } from './questions-section.component';

describe('QuestionsSectionComponent', () => {
  let component: QuestionsSectionComponent;
  let fixture: ComponentFixture<QuestionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
