import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  submitted = false;

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

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      form.reset()
    }
  }
}
