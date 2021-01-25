import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';

export class Cultura {
  constructor (
    public id: number,
    public cultura: string
  ){}
}

@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.component.html',
  styleUrls: ['./culturas.component.css']
})


export class CulturasComponent implements OnInit {
  culturas: Cultura[];

  public isCollapsed: {[id: number] : boolean} = {};

  @ViewChild('alvo') target: ViewContainerRef;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCulturas();
  }

  getCulturas(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer 15bf5df6-3f5d-3734-8806-d7401e923a76' //chave válida por 1 ano
    });

    this.httpClient.get<any>('https://api.cnptia.embrapa.br/agritec/v1/culturas', {headers}).subscribe( //Se o tipo não for any o terminal acusa erro de não existir a propriedade data
      response => {
        this.culturas = response.data;
        this.culturas.forEach(x => this.isCollapsed[x.id] = false);
      }
    );
  }
}
