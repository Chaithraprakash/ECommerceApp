import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { AppInterceptor } from './app.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
     {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
