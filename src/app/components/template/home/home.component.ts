import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../../../services/mysql.service';
import { Volume } from '../../../models/volume';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'ProjetoPorcentagem';
  volumes: Volume[] = [
    {"nome": 'cisternaUm', volume: 0},
    {"nome": 'cisternaDois', volume: 0}
  ];
  atualiza: any;

  constructor(private mysqlService: MysqlService) {
   }

  ngOnInit(): void {
    this.atualizaVolume();

    this.atualiza = setInterval(() => {
      this.atualizaVolume(); 
    }, 1000 * 60 * 1);
  }

  atualizaVolume() {
    this.mysqlService.listar().subscribe(objetos => {
      objetos.forEach(objeto => {
        objeto.volume = objeto.volume*20; // multiplicado por 20 pois o volume máximo é de 5 litros, logo 1 litro = 20%, 5 litros = 100%
      })

      this.volumes = objetos;
      console.log(this.volumes);
    });
  }

  ngOnDestroy() {
    if (this.atualiza) {
      clearInterval(this.atualiza);
    }
  }
}
