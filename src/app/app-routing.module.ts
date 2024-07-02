import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CongoListComponent } from './species-list/congo-list/congo-list.component';
import { LagosListComponent } from './species-list/lagos-list/lagos-list.component';
import { QuoteComponent } from './quote/quote.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Services', component: ServiceComponent},
  {path: 'Species', component: BlogComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Congo', component: CongoListComponent},
  {path: 'Lagos', component: LagosListComponent},
  {path: 'Quote', component: QuoteComponent},
  {path: 'Terms', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
