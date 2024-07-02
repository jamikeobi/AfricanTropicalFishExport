import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject , map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesListServicesService {

  private CongoFishList = [
    {id: 1, Fishname: 'ABC', source: '../../assets/img/CongoFishes/1.mp4'},
    {id: 2, Fishname: 'ABC', source: "../../assets/img/CongoFishes/video3.mp4"},
    {id: 3, Fishname: 'ABC', source: "../../assets/img/CongoFishes/3.mp4"},
    {id: 4, Fishname: 'ABC', source: "../../assets/img/CongoFishes/4.mp4"},
    {id: 5, Fishname: 'ABC', source: "../../assets/img/CongoFishes/5.mp4"},
    {id: 6, Fishname: 'ABC', source: "../../assets/img/CongoFishes/6.mp4"},
    {id: 7, Fishname: 'ABC', source: "../../assets/img/CongoFishes/7.mp4"},
    {id: 8, Fishname: 'ABC', source: "../../assets/img/CongoFishes/8.mp4"},
    {id: 9, Fishname: 'ABC', source: "../../assets/img/CongoFishes/9.mp4"},

  ];

  private NigerianFishList = [
    {id: 1, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video1.mp4'},
    {id: 2, fishName: ' Africa', source: '../../assets/img/NigerianFishes/video2.mp4'},
    {id: 3, fishName: 'TSudanitus', source: '../../assets/img/NigerianFishes/video3.mp4'},
    {id: 4, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video4.mp4'},
    {id: 5, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video5.mp4'},
    {id: 6, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video6.mp4'},
    {id: 7, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video7.mp4'},
    {id: 8, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video8.mp4'},
    {id: 9, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video9.mp4'},
    {id: 10, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video10.mp4'},
    {id: 11, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video11.mp4'},
    {id: 12, fishName: 'Titus', source: '../../assets/img/NigerianFishes/video12.mp4'}
  ];
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() { }

  getCongoFishList(): Observable<any[]>{
    return of(this.CongoFishList);
    
  };

  getNigerianFishList(): Observable<any[]>{
    return this.searchSubject.pipe(
      map((searchTerm: string) =>{
        if(!searchTerm){
          return this.NigerianFishList;
        }
        searchTerm = searchTerm.toLowerCase();
        return this.NigerianFishList.filter(fish => fish.fishName.toLowerCase().includes(searchTerm));
      })
    );
  }

  setSearchTerm(term: string){
    this.searchSubject.next(term);
  }
}
