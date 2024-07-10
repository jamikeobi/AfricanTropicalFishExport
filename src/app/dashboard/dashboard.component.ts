import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { ContactForm } from '../Model/form';
import { QuoteFormData } from '../Model/quote';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: ContactForm[] = [];

  Quote: QuoteFormData[] = [];

  constructor(private formService: FormServiceService, private http: HttpClient) {}

  ngOnInit() {
    this.formService.getFormData().subscribe((res) => {
      this.data = res;
    });
    this.formService.getQuoteData().subscribe((res) => {
      this.Quote = res;
    });
  }

  // Fetch Contact Form Data
  getFormData() {
    this.formService.getFormData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  // Fetch Quote Form Data
  getQuoteData() {
    this.formService.getQuoteData().subscribe((qoute) => {
      this.Quote = qoute;
      console.log('From QuoteForm:', qoute);
    });
  }


  // Delete Form Data by ID
  showConfirmDialog = false;
  taskToDelete: string | undefined;

  toggleConfirmDialog(id: string | undefined) {
    this.taskToDelete = id;
    this.showConfirmDialog = !this.showConfirmDialog;
  }

  confirmDelete() {
    if (this.taskToDelete) {
      this.http.delete('https://africantropicalfish-default-rtdb.firebaseio.com/qouteForm/' + this.taskToDelete + '.json').subscribe(() => {
        this.Quote = this.Quote.filter((form) => form.id !== this.taskToDelete);
        console.log(`Deleted task with id: ${this.taskToDelete}`);
        this.taskToDelete = undefined;
        this.formService.getQuoteData().subscribe((res) => {
          this.Quote = res;
        })
      });
    } if(this.taskToDelete){
      this.http.delete('https://africantropicalfish-default-rtdb.firebaseio.com/contactForm/' + this.taskToDelete + '.json').subscribe(() => {
        this.data = this.data.filter((form) => form.id !== this.taskToDelete);
        console.log(`Deleted task with id: ${this.taskToDelete}`);
        this.taskToDelete = undefined;
        this.formService.getFormData().subscribe((res) => {
          this.data = res;
          })
      });
    }
     else {
      console.log('Task id is undefined');
    }
    this.showConfirmDialog = false;
  }

  cancelDelete() {
    this.taskToDelete = undefined;
    this.showConfirmDialog = false;
  }

  // Delete All Contact Form Data When Clicked
  DeleteContactFormClicked() {
    this.formService.DeleteContactFormClicked().subscribe((res) => {
      console.log(res);
    });
    this.formService.getFormData().subscribe((res) => {
      this.data = res;
    });
  }

  // Delete All Quote Form Data When Clicked
  DeleteQuoteFormClicked() {
    this.formService.DeleteQuoteFormClicked().subscribe((res) => {
      console.log(res);
    });
    this.formService.getQuoteData().subscribe((res) => {
      this.Quote = res;
    });
  }
}
