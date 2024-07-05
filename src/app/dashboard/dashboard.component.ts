import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { ContactForm } from '../Model/form';

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
  }

  getFormData(){
    this.formService.getFormData().subscribe((data) => {
      this.data = data;
      console.log(data)
    })
  }
}
