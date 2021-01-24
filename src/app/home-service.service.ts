import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  url: string = 'https://api.cnptia.embrapa.br/agritec/v1/';

  constructor(private httpClient: HttpClient) { }

  sendPostRequest(){
    
  }
}
