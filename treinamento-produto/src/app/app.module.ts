import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commom-components/header/header.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ProdutoNovoComponent } from './pages/produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './pages/produto-editar/produto-editar.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoComponent,
    ProdutoNovoComponent,
    ProdutoEditarComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
