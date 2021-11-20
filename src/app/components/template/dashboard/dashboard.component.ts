import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../../../services/mysql.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  check2019: boolean = false;
  check2020: boolean = false;
  check2021: boolean = true;
  check2022: boolean = false;

  constructor(private mysqlService: MysqlService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  data2019: any;
  data2020: any;
  data2021: any = [0,0,0,0,0,0,0,0,0,0,0,0];
  data2022: any;
  
  public lineChartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: this.data2021, label: '2021', borderColor: '#ff7a96', backgroundColor: '#ffc1ce'}
  ];

  atualizaCheck2019() {
    this.check2019 = !this.check2019;

    if(this.check2019 === true) {
      this.lineChartData.push({data: this.data2019, label: '2019', borderColor: '#4aabec', backgroundColor: '#afdaf7'})
    } else if(this.check2019 === false) {
      let dadoIndex: number = this.lineChartData.findIndex( dado => {
        if(dado.label == '2019') {
          return true
        }
      })
      this.lineChartData.splice(dadoIndex, 1)
    }
  }

  atualizaCheck2020() {
    this.check2020 = !this.check2020;

    if(this.check2020 === true) {
      this.lineChartData.push({data: this.data2020, label: '2020', borderColor: '#ffce56', backgroundColor: '#ffebbb'})
    } else if(this.check2020 === false) {
      let dadoIndex: number = this.lineChartData.findIndex( dado => {
        if(dado.label == '2020') {
          return true
        }
      })
      this.lineChartData.splice(dadoIndex, 1)
    }
  }

  atualizaCheck2021() {
    this.check2021 = !this.check2021;

    if(this.check2021 === true) {
      console.log(this.data2021);
      this.lineChartData.push({data: this.data2021, label: '2021', borderColor: '#ff7a96', backgroundColor: '#ffc1ce'})
    } else if(this.check2021 === false) {
      let dadoIndex: number = this.lineChartData.findIndex( dado => {
        if(dado.label == '2021') {
          return true
        }
      })
      this.lineChartData.splice(dadoIndex, 1)
    }
  }

  async atualizaCheck2022() {
    this.check2022 = !this.check2022;

    if(this.check2022 === true) {
      this.lineChartData.push({data: this.data2022, label: '2022', borderColor: '#4bc0c0', backgroundColor: '#b7e6e6'})
    } else if(this.check2022 === false) {
      let dadoIndex: number = this.lineChartData.findIndex( dado => {
        if(dado.label == '2022') {
          return true
        }
      })
      this.lineChartData.splice(dadoIndex, 1)
    }
  }

  buscaDados() {
    this.mysqlService.buscarDados(2021).subscribe(volumes => {
      this.data2021 = volumes;
    });
    this.mysqlService.buscarDados(2019).subscribe(volumes => {
      this.data2019 = volumes;
    });
    this.mysqlService.buscarDados(2020).subscribe(volumes => {
      this.data2020 = volumes;
    });
    this.mysqlService.buscarDados(2022).subscribe(volumes => {
      this.data2022 = volumes;
    });
  }

  ngOnInit(): void {
    this.buscaDados();
  }

}
