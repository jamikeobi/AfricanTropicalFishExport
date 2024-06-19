import { Component } from '@angular/core';
import { SpeciesListServicesService } from '../species-list-services.service';
import { BlogServiceService } from 'src/app/blog/blog-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

constructor(private specieService: SpeciesListServicesService, private BlogService: BlogServiceService){}



  onSearch(){
    this.specieService.setSearchTerm(this.searchTerm);
    this.BlogService.setSearchTerm(this.searchTerm);
  }
}
