import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Filter } from './job/job.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobService } from './service/job.service';
import { HttpClientModule} from '@angular/common/http';
import { JobComponent } from './job/job.component';
import { HeaderComponent } from './header/header.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponentComponent} from './not-found-component/not-found-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './company/company.component'

@NgModule({
  declarations: [
    Filter,
    AppComponent,
    JobComponent,
    HeaderComponent,
    JobInfoComponent,
    NotFoundComponentComponent,
    CompanyComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: JobComponent},
      {path:'job/:id', component: JobInfoComponent},
      {path:'job/:id/:companyName', component: CompanyComponent},
      {path:'**', component: NotFoundComponentComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    JobService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
