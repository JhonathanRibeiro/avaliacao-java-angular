import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  constructor(
    private http: HttpClient) { }

  public postAluno(aluno: any): Observable<any> {
    return this.http.post<any>(environment.api + '/alunos', aluno);
  }

  public updateAluno(aluno: Aluno): Observable<Aluno> {
    const url = `${environment.api}/alunos/${aluno.id}`;
    return this.http.put<Aluno>(url, aluno)
  }
}