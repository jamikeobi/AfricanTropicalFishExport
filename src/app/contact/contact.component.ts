import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      whatsapp: ['', Validators.required],
      country: ['', Validators.required],
      fishName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      // You can handle form submission logic here (e.g., send data to server)
    } else {
      // Mark all fields as touched to display validation messages
      this.orderForm.markAllAsTouched();
    }
  }
}
