import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getNews(formData:any) {
    console.log(BASE_URL);
    return this.http.post(BASE_URL+`getNewsByFilter`,JSON.stringify(formData),this.getHeaders()).pipe(map(response => {
      return response;
    }));
  }

  getContentByName(name:any) {
    console.log(BASE_URL);
    return this.http.get(BASE_URL+`getContent/${name}`).pipe(map(response => {
      return response;
    }));
  }

 private getHeaders() {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    return httpOptions;
  }

}
