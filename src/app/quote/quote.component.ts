import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  submitted = false;

  @ViewChild('contactForm') contactForm!: NgForm;
  fishList = [
    'Butterflyfish',
    'Albino Tiger Barb',
    'Angelfish',
    'Archerfish',
    'Asian Arowana',
    'Betta Fish',
    'Black Ghost Knifefish',
    'Black Molly',
    'Black Skirt Tetra',
    'Boeseman\'s Rainbowfish',
    'Bolivian Ram',
    'Bristlenose Pleco',
    'Cardinal Tetra',
    'Celestial Pearl Danio',
    'Clown Loach',
    'Congo Tetra',
    'Corydoras Catfish',
    'Dwarf Gourami',
    'Electric Blue Ram',
    'Electric Yellow Cichlid',
    'Endler\'s Livebearer',
    'Fancy Guppy',
    'Firemouth Cichlid',
    'Flame Tetra'
  ];

  http: HttpClient = inject(HttpClient);

  onSubmit(form: any) {
    this.submitted = false;
    if (form.valid) {
      // console.log('Form Submitted!', form.value);
      const header = new HttpHeaders({'myHeader' : 'QouteForm'});
      const qouteData = {
        fname: this.contactForm.value.fname,
        lname: this.contactForm.value.lname,
        email: this.contactForm.value.email,
        phoneNumber: this.contactForm.value.phoneNumber,
        fishType: this.contactForm.value.fishType,
        quantity: this.contactForm.value.quantity,
        optionalFishType: this.contactForm.value.optionalFishType,
        message: this.contactForm.value.message
      };
      this.http.post<{name : string}>('https://africantropicalfish-default-rtdb.firebaseio.com/qouteForm.json', qouteData, {headers : header}).subscribe((response)=> {
        console.log('Form submission response:',response);
      });
      form.reset()
    }
  }
}
