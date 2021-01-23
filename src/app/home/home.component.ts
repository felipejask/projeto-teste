import { Component, OnInit } from '@angular/core';
import { Name } from '../home';
import { HomeServiceService } from './../home-service.service';
import { CulturasComponent, Cultura } from '../culturas/culturas.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  culturas: Cultura[];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCulturas();
  }

  getCulturas(){
    this.httpClient.get<Cultura[]>('https://api.cnptia.embrapa.br/agritec/v1/culturas').subscribe(
      response => {
        console.log(response);
        this.culturas = response;
      }
    );
  }
  

}
