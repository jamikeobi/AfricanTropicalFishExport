import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from '../Model/form';
import { map, pipe } from 'rxjs';
import { QuoteFormData } from '../Model/quote';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private apiUrl = 'https://africantropicalfish-default-rtdb.firebaseio.com/contactForm.json';
  private QuoteApiUrl = 'https://africantropicalfish-default-rtdb.firebaseio.com/qouteForm.json';


  constructor(private http: HttpClient) { }

  getFormData(): Observable<any>{
    return this.http.get<{[key: string]: ContactForm}>(this.apiUrl).pipe(map((response) => {
      let forms = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          forms.push({...response[key], id: key})
        }
      }

      return forms;
    }));
  };


  getQuoteData(): Observable<any>{
    return this.http.get<{[key: string]: QuoteFormData}>(this.QuoteApiUrl).pipe(map((response) => {
      let quote = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          quote.push({...response[key], id: key})
        }
      }

      return quote;
    }));
  }
}
