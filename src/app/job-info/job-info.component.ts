import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../service/job.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})
export class JobInfoComponent implements OnInit {
  response: boolean= false;
  error= ""
  jobsData: any;
  jobsInfo: any;
  jobsId: any;
  displayData = [
    {companyName : ""},
    {contents: ""},
    {jobName: ""},
    {publicationDate: ""},
    {companyId: ""},
    {detailCompanyId: ""}
  ]

  constructor(
    private service: JobService,
    private route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    // Snapshot per l'url
   let id = this.route.snapshot.paramMap.get('id')
    // Ottengo i dati dell'azienda grazie all'id di snapshot
   this.service.getData()
   .subscribe(response => {
     this.jobsData= response
     this.jobsInfo = this.jobsData.results
     //Confronto ogni id delle risposte per trovare quello che mi serve
     this.jobsInfo.forEach((element: any) => {
      if(element.id == id) {
        this.displayData[0].companyName = element.company.name;
        this.displayData[0].contents = element.contents;
        this.displayData[0].jobName = element.name;
        this.displayData[0].publicationDate = element.publication_date;
        this.displayData[0].companyId = element.id
        this.displayData[0].detailCompanyId = element.company.id
        this.jobsId = element.company.id
        }
    });
   },
   error => {
     console.log('ops', error.name)
     this.response = true
     this.error = error.name
   })
  }

  //Funzione per tornare alla pagina precedente
  backClicked(){
    this._location.back();
  }
}

