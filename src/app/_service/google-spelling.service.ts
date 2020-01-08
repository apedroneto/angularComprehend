import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSpellingService {

  END_POINT = '/'

  constructor(private httpClient: HttpClient) { }

  searchSpellin(phrase) {
    return new Promise((resolve, reject) => {
      this.httpClient.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyBAfHaP2iZ_mgIXqCO8T_Hu_-NZ6YJyNZI&cx=017576662512468239146:omuauf_lfve&lr=lang_pt&q='+phrase).subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }


}
