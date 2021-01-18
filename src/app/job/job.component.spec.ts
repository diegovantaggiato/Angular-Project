import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';
import { Filter } from './job.component'; // your custom pipe path
import { HttpClientModule } from '@angular/common/http'
import { Pipe, PipeTransform } from '@angular/core';


describe('Pipe: LimitTo', () => {
  let pipe: Filter;

  beforeEach(() => {
    pipe = new Filter();
  });

  it('show 3 dot when string length is grater ther 15 chartacter', () => {
    expect(pipe.transform('my name is vikram sharma', '15')).toBe('my name is vikr...');
  });

  it('show full string when string length is less then 15 character', () => {
    expect(pipe.transform('my name is vikram sharma', '200')).toBe('my name is vikram sharma');
  });
});

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobComponent, Pipe ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
