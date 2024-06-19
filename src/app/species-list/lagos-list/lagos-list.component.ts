import { Component } from '@angular/core';
import { SpeciesListServicesService } from '../species-list-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lagos-list',
  templateUrl: './lagos-list.component.html',
  styleUrls: ['./lagos-list.component.css']
})
export class LagosListComponent {
  NigerianFishList$!: Observable<any[]>;

  constructor(private speciesList: SpeciesListServicesService){}

  ngOnInit(){
    this.NigerianFishList$ = this.speciesList.getNigerianFishList();
  }
}
