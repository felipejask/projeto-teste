import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

export class Cultivar {
  constructor(
    public idCultivar: number,
    public idCultura: number,
    public safra: string,
    public numeroRnc: number,
    public obtentorMantenedor: string,
    public cultivar: string,
    public cultura: string,
    public potencialProdutivo: number,
    public duracaoCiclo: number,
    public uf: string,
    public grupo: string,
    public maturacaoFisiologica: number,
    public floracao: number,
    public enchimentoGraos: number,
    public dataAtualizacao: string
  ){}
}

@Component({
  selector: 'app-cultivares',
  templateUrl: './cultivares.component.html',
  styleUrls: ['./cultivares.component.css']
})
export class CultivaresComponent implements OnInit {
  @Input() culturaId: number;

  cultivares: Cultivar[];
  filtroAtual: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCultivares();
  }
  
  getCultivares(filtro?: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer 15bf5df6-3f5d-3734-8806-d7401e923a76' //chave válida por 1 ano
    });

    let params = new HttpParams()
      .set('idCultura', `${this.culturaId}`)
      .set('uf', 'RS');

    this.httpClient.get<any>('https://api.cnptia.embrapa.br/agritec/v1/cultivares', {headers, params}).subscribe( //Se o tipo não for any o terminal acusa erro de não existir a propriedade data
      response => {
        if(filtro){
          this.cultivares = response.data.filter(x => x.cultivar.concat(x.safra, x.obtentorMantenedor).includes(filtro));
          this.filtroAtual = filtro;            
        }
        else {
          this.cultivares = response.data;
          this.filtroAtual = "";
        }
      }
    );
  }
}
