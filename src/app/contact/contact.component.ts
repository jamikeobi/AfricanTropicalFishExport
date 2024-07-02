import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  orderForm!: FormGroup;
  http: HttpClient = inject(HttpClient);

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
      message: [''],
      companyName: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const header = new HttpHeaders({'header':'Contact Form'});
    if (this.orderForm.valid) {
      const formData = {
        fullName: this.orderForm.get('fullName')?.value,
        email: this.orderForm.get('email')?.value,
        mobile: this.orderForm.get('mobile')?.value,
        whatsapp: this.orderForm.get('whatsapp')?.value,
        companyName: this.orderForm.get('companyName')?.value,
        country: this.orderForm.get('country')?.value,
        fishName: this.orderForm.get('fishName')?.value,
        quantity: this.orderForm.get('quantity')?.value,
        message: this.orderForm.get('message')?.value
      };
      this.http.post<{name: string}>('https://africantropicalfish-default-rtdb.firebaseio.com/contactForm.json', formData,{headers: header}).subscribe((response) => {
        console.log('Form has been submitted:', response);
        this.orderForm.reset()
      });
    } else {
      // Mark all fields as touched to display validation messages
      this.orderForm.markAllAsTouched();
    }
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
