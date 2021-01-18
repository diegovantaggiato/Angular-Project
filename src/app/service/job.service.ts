import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url = 'https://www.themuse.com/api/public/jobs?category=Engineering&page=1&location=Italy'
  private url_2 = "https://www.themuse.com/api/public/companies/"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url)
  }

  getInfoJob(id: any) {
   return this.http.get(this.url_2 + id)
  }
}
