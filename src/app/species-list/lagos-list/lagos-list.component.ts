import { Component, AfterViewInit, OnInit, ViewChild , ElementRef, Renderer2 } from '@angular/core';
import { SpeciesListServicesService } from '../species-list-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lagos-list',
  templateUrl: './lagos-list.component.html',
  styleUrls: ['./lagos-list.component.css']
})
export class LagosListComponent implements AfterViewInit, OnInit {
  NigerianFishList$!: Observable<any[]>;

  constructor(private speciesList: SpeciesListServicesService, private renderer:Renderer2) {}

  ngOnInit() {
    this.NigerianFishList$ = this.speciesList.getNigerianFishList();
  }

  
  @ViewChild('overlayElement') overlayElement!: ElementRef;

  ngAfterViewInit() {
    this.renderer.listen(this.overlayElement.nativeElement, 'contextmenu', (event: MouseEvent) => {
      event.preventDefault();
    });
  }

}
