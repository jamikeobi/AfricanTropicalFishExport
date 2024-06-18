import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { BlogServiceService } from './blog-service.service';
import { PopupServiceService } from '../popup-dialog/popup-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{
  fishList$!: Observable<any[]>;

  constructor(private blogService: BlogServiceService, private popupService: PopupServiceService){}
  ngOnInit(): void {
    this.fishList$ = this.blogService.getFishData();
    this.popupService.openPopUpMessage();
  }  
}
