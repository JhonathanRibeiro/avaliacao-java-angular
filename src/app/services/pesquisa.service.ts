import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  constructor(private http: HttpClient) { }
  
  public getAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(environment.api+'/alunos');
  }
  
  public getAlunoById(id: any): Observable<Aluno[]> {
    const url = `${environment.api}/alunos/${id}`;
    return this.http.get<Aluno[]>(url);
  }

}
