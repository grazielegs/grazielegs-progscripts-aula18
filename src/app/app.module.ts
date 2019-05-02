import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TabelaComponent } from './tabela/tabela.component';

/* importar os NgModule */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';

/* para configurar o DatePipe como Brasil */
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { ServicoService } from './servico.service';
registerLocaleData(localeBr, 'pt');


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,    
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule ],
  declarations: [ AppComponent, TemplateComponent, ReactiveComponent, TabelaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    ServicoService,
    /* usado pelo MatDatepickerModule */
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    /* usado pelo DatePipe */
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class AppModule { }
