import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
