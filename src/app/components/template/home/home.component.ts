import { Component, OnInit } from '@angular/core';
import { Connect, queryVolumes } from '../../../services/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.atualizaVolumes()
  }

  title = 'ProjetoPorcentagem';
  cisternaUm: number = 0;
  cisternaDois: number = 0;

  async atualizaVolumes() {
    let connection = await Connect();
    
    
    queryVolumes(connection).then (results => {
      console.log(results);
    })
  }
}
