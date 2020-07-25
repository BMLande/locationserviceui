
import { environment } from '../..//environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  api_url = environment.api_url;
  constructor(
    private http: HttpClient
  ) { }

  getNearestOutlet(obj): Observable<any> {
    const param = {
      "address": obj.address
    };
    return this.http.post<any>(this.api_url + 'outlet/FindNearestOutlet', param, httpOptions);
  }
}
