import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ContactForm } from '../Model/form';
import { map, pipe } from 'rxjs';
import { QuoteFormData } from '../Model/quote';
import { LoggingServiceService } from './logging-service.service';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private apiUrl = 'https://africantropicalfish-default-rtdb.firebaseio.com/contactForm.json';
  private QuoteApiUrl = 'https://africantropicalfish-default-rtdb.firebaseio.com/qouteForm.json';


  constructor(private http: HttpClient, private loggingService: LoggingServiceService) { }

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
    }), catchError((error: HttpErrorResponse) => {
      console.log('Full error:', error);

      const statusCode = error.status;
      const errorMessage = error.message;
      const errorObj = {statusCode , errorMessage , dateTime: new Date};
      console.log('Extracted error: ',errorObj);
      
      this.loggingService.logError(errorObj)
      return throwError(() => error);
      
    }));
  }

  DeleteContactFormClicked(): Observable<any>{
    return this.http.delete(this.apiUrl);
  }

  DeleteQuoteFormClicked(): Observable<any>{
    return this.http.delete(this.QuoteApiUrl);
  }
}
