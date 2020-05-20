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
    return this.http.post(BASE_URL+'templatesVal',JSON.stringify(formData),this.getHeaders()).pipe(map(response => {
        console.log("response");
        console.log(response);
      return response;
    }));
 }

 getHeaders() {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
return httpOptions;
}

}
