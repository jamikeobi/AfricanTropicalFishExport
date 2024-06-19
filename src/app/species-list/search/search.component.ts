import { Component } from '@angular/core';
import { SpeciesListServicesService } from '../species-list-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

constructor(private specieService: SpeciesListServicesService){}



  onSearch(){
    this.specieService.setSearchTerm(this.searchTerm);
  }
}
