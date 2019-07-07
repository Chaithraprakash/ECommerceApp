import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MenWearService {
  apiURl = "http://localhost:3000/menwear";

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get(this.apiURl);   
  
  }
    
}
