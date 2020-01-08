import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemanticSearchService {

  END_POINT = '/'

  constructor(private httpClient: HttpClient) { }

  search(phrase) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(environment.host_backend + this.END_POINT, {'phrase': phrase}).subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }
  

}
