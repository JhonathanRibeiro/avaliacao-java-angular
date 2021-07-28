import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno.model';
import { Boletim } from '../models/boletim.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor(private http: HttpClient) { }
  
  public getAlunos(): Observable<Boletim[]>{
    return this.http.get<Boletim[]>(environment.api+'/boletim');
  }
  
  public getAlunoById(id: string): Observable<Aluno> {
    const url = `${environment.api}/alunos/${id}`;
    return this.http.get<Aluno>(url);
  }

  public getBoletim(id: any): Observable<Boletim> {
    const url = `${environment.api}/boletim/${id}`;
    return this.http.get<Boletim>(url);
  }

  public getBoletins(id: any): Observable<Boletim> {
    const url = `${environment.api}/boletins/${id}`;
    return this.http.get<Boletim>(url);
  }

  public getDadosPorBimestre(id: any, b: any): Observable<Boletim> {
    const url = `${environment.api}/bimestres?boletim=${id}&aluno_id=${id}&bimestre_id=${b}`;
    return this.http.get<Boletim>(url);
  }



}
