import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductsService } from './products/products.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import localeBr from '@angular/common/locales/br';
// Register Locale BR
registerLocaleData(localeBr, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsLetterComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
