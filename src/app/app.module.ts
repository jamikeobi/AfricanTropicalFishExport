import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { CongoListComponent } from './species-list/congo-list/congo-list.component';
import { LagosListComponent } from './species-list/lagos-list/lagos-list.component';
import { QuoteComponent } from './quote/quote.component';
import { TermsComponent } from './terms/terms.component';
import { HappyClientComponent } from './happy-client/happy-client.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { SearchComponent } from './species-list/search/search.component';
import { TestimonialsComponent } from './service/testimonials/testimonials.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    SpeciesListComponent,
    CongoListComponent,
    LagosListComponent,
    QuoteComponent,
    TermsComponent,
    HappyClientComponent,
    PopupDialogComponent,
    SearchComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
