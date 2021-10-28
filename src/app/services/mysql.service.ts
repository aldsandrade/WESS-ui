import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volume } from '../models/volume';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  private readonly url = 'http://localhost:8080/volumes';
  constructor(private http: HttpClient) { }

  listar(){
    return  this.http.get<Volume[]>(this.url);
  }
}
