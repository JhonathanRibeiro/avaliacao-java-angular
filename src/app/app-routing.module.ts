import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './pages/cadastro/create/create.component';
import { UpdateComponent } from './pages/cadastro/update/update.component';
import { DiarioEscolarComponent } from './pages/diario-escolar/diario-escolar.component';
import { DocumentacaoComponent } from './pages/documentacao/documentacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'diario-escolar', pathMatch: 'full' },
  {
    path: 'diario-escolar', component: DiarioEscolarComponent
  },
  {
    path: 'aluno/create', component: CreateComponent
  },
  {
    path: 'aluno/update/:id', component: UpdateComponent
  },
  {
    path: 'documentacao', component: DocumentacaoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
