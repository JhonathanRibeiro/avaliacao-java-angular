import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DiarioEscolarModule } from './pages/diario-escolar/diario-escolar.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DiarioEscolarComponent } from './pages/diario-escolar/diario-escolar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateComponent } from './pages/cadastro/create/create.component';
import { UpdateComponent } from './pages/cadastro/update/update.component';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './components/loading/loading.interceptor';
import { LoadingService } from './services/loading.service';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DocumentacaoComponent } from './pages/documentacao/documentacao.component';
import { VisualizaboletimComponent } from './components/visualizaboletim/visualizaboletim.component';
import { BoletimComponent } from './components/boletim/boletim.component';

@NgModule({
  declarations: [
    AppComponent,
    DiarioEscolarComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CreateComponent,
    UpdateComponent,
    LoadingComponent,
    TableComponent,
    DocumentacaoComponent,
    VisualizaboletimComponent,
    BoletimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DiarioEscolarModule,
    MaterialModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true, deps: [LoadingService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
