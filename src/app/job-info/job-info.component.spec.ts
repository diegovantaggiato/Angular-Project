import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInfoComponent } from './job-info.component';
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';


class RouterMock {

  navigateByUrl(url: string) {
    return url;
  }

  serializeUrl(url: string) {
     return url;
  }

  // Dummy further methods here if required

}


describe('JobInfoComponent', () => {
  let component: JobInfoComponent;
  let fixture: ComponentFixture<JobInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobInfoComponent ],
      imports: [HttpClientModule],
      providers:[{provide: ActivatedRoute, useClass: RouterMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

