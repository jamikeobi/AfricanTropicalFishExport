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
  showWriteUp: boolean = true;
  items: any[] = []; // Array to hold items for pagination
  // collection: any[];
  itemsPerPage: number = 20;
  p: number = 1;

  constructor(private blogService: BlogServiceService){}
  ngOnInit(): void {
    this.fishList$ = this.blogService.GetFishList();
  }  


  closeWriteUp(): void {
    this.showWriteUp = false;
  }
}
