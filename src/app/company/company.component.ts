import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../service/job.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  // Messaggio di errore
  response: boolean = false;
  error:string = ""
  //-------
  companyData:any;
  companyInfo:any;

  detailDisplayed: any[] = [
    {name: ""},
    {location:[]},
    {refs:""},
    {description:""},
    {idPreviousPage: ""}
  ]

  constructor(
    private route: ActivatedRoute,
    private service : JobService,
    private _location: Location) { }

  ngOnInit(): void {
    // Ottieni id dell'azienda per accedere ai suoi dettagli
    let id = this.route.snapshot.paramMap.get('companyName')

    this.service.getInfoJob(id)
    .subscribe(response => {
      console.log(response);
      this.companyData = response
      //Salvo risposte
      this.detailDisplayed[0].name = this.companyData.name;
      this.detailDisplayed[0].description = this.companyData.description;
      this.detailDisplayed[0].location = this.companyData.locations
      this.detailDisplayed[0].refs = this.companyData.refs.logo_image;

      //Salvo tutte le locations disponibili
      for (let i= 0; i < this.companyData.locations.length; i++) {
        this.detailDisplayed[0].location[i]= this.companyData.locations[i].name
      }
    },
    error => {
      console.log('ops', error.name)
      this.response = true
      this.error = error.name
    })

  }

  // Torna alla pagina precedente
  backClicked(){
    this._location.back()
  }

}
