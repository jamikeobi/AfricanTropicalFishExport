import { Component , OnInit, ViewChild , ElementRef} from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesListServicesService } from '../species-list-services.service';

@Component({
  selector: 'app-congo-list',
  templateUrl: './congo-list.component.html',
  styleUrls: ['./congo-list.component.css']
})
export class CongoListComponent implements OnInit{
  CongoFishList$!: Observable<any[]>;

  constructor(private speciesList: SpeciesListServicesService){}

  ngOnInit(){
    this.CongoFishList$ = this.speciesList.getCongoFishList();
  }
  @ViewChild('videoElement') videoElement!: ElementRef;

  ngAfterViewInit() {
    this.videoElement.nativeElement.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
    });
  }
}
