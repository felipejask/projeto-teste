import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  cultivares: Cultivar[];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

}
