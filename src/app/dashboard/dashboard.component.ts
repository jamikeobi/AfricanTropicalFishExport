import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { ContactForm } from '../Model/form';
import { QuoteFormData } from '../Model/quote';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  data: ContactForm[] = [];

  constructor(private formService: FormServiceService){}

  ngOnInit(){
    this.getFormData();
    this.getQuoteData();
  }

  getFormData(){
    this.formService.getFormData().subscribe((data) => {
      this.data = data;
      console.log(data)
    })
  };

  Quote: QuoteFormData[] = [];

  getQuoteData(){
    this.formService.getQuoteData().subscribe((qoute) => {
      this.Quote = qoute;
      console.log('From QuoteForm:',qoute);
      
    })
  }
}
