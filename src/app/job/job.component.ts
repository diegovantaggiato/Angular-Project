import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
import { Pipe, PipeTransform } from '@angular/core';

// Per search bar
@Pipe({
  name: 'limitTo'
})
export class Filter implements PipeTransform {

transform(value: string, args: string): string {
    const limit = args ? parseInt(args, 10) : 10;
    const trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobsData: any;
  jobsInfo: any;
  searchText:any;
  response: boolean= false;
  error =""

  constructor(private service: JobService) { }

  ngOnInit(): void {
    this.service.getData()
      .subscribe(response => {
        this.jobsData= response
        this.jobsInfo = this.jobsData.results
        console.log(this.jobsInfo);
      },
      error => {
        console.log('ops', error.name)
        this.response = true
        this.error = error.name
      }
      )
  }

}
