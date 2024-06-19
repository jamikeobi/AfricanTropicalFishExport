import { Injectable } from '@angular/core';
import { Observable , map, BehaviorSubject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private fishList = [
    { sn: 1, nameEnglish: "Arowana (Small)", nameScientific: "Heteroties Niloticus", qtyPerBox: 100 },
    { sn: 2, nameEnglish: "Arowana (Medium)", nameScientific: "Heteroties Niloticus", qtyPerBox: 80 },
    { sn: 3, nameEnglish: "Aba Knife Fish", nameScientific: "Gymnarnus Niloticus", qtyPerBox: 300 },
    { sn: 4, nameEnglish: "African Phago", nameScientific: "Phago Muculatus", qtyPerBox: 100 },
    { sn: 5, nameEnglish: "African Shark", nameScientific: "Labeo Senegalensis", qtyPerBox: 30 },
    { sn: 6, nameEnglish: "Aquatic Clawd Frog", nameScientific: "Xenopus Laevis", qtyPerBox: 400 },
    { sn: 7, nameEnglish: "African Tree Frogs", nameScientific: "Hyperolius Sp.", qtyPerBox: 400 },
    { sn: 8, nameEnglish: "Alestes Tetra", nameScientific: "Brycinus Longipinnis", qtyPerBox: 130 },
    { sn: 9, nameEnglish: "Aphyeseimion Killi", nameScientific: "Aphyeseimion (Various)", qtyPerBox: 400 },
    { sn: 10, nameEnglish: "Aluminum Cat", nameScientific: "Chryciluts Brachynema", qtyPerBox: 130 },
    { sn: 11, nameEnglish: "Atya Shrimps (Small)", nameScientific: "Atya Gabonensis", qtyPerBox: 200 },
    { sn: 12, nameEnglish: "Atya Shrimps (Medium)", nameScientific: "Atya Gabonensis", qtyPerBox: 100 },
    { sn: 13, nameEnglish: "Atya Shrimps (Large)", nameScientific: "Atya Gabonensis", qtyPerBox: 40 },
    { sn: 14, nameEnglish: "Butterfly (Small)", nameScientific: "Pantodonuch Bucholzi", qtyPerBox: 150 },
    { sn: 15, nameEnglish: "Blue Fish", nameScientific: "Aplocheilithys Myersi", qtyPerBox: 300 },
    { sn: 16, nameEnglish: "Blood Fish", nameScientific: "Phractolaemus Ansorgi", qtyPerBox: 50 },
    { sn: 17, nameEnglish: "Blue Diamond Tetra", nameScientific: "Alestopetersius Smylkai", qtyPerBox: 150 },
    { sn: 18, nameEnglish: "Bitenainatu", nameScientific: "Aphyeseimion Bitenainatu", qtyPerBox: 40 },
    { sn: 19, nameEnglish: "Brachy", nameScientific: "Synodontis Batensoda", qtyPerBox: 50 },
    { sn: 20, nameEnglish: "Bush Fish", nameScientific: "Ctenopoma Mactlatus", qtyPerBox: 40 },
    { sn: 21, nameEnglish: "Bagrus (Shovel Head)", nameScientific: "Bagrus Ubagensis", qtyPerBox: 50 },
    { sn: 22, nameEnglish: "Barbs", nameScientific: "Barboides Gracils", qtyPerBox: 300 },
    { sn: 23, nameEnglish: "Blue Panchax", nameScientific: "Aplocheilichthys Panchax", qtyPerBox: 300 },
    { sn: 24, nameEnglish: "Georg Tetra", nameScientific: "Phenacogrammus Interruptus", qtyPerBox: 420 },
    { sn: 25, nameEnglish: "Black Ghost", nameScientific: "Apteronotus Albifrons", qtyPerBox: 60 },
    { sn: 26, nameEnglish: "Borneo Sucker", nameScientific: "Gastromyzon Punctulatus", qtyPerBox: 200 },
    { sn: 27, nameEnglish: "Bumblebee Goby", nameScientific: "Brachygobius Xanthozona", qtyPerBox: 150 },
    { sn: 28, nameEnglish: "Bronze Cory", nameScientific: "Corydoras Aeneus", qtyPerBox: 300 },
    { sn: 29, nameEnglish: "Bristlenose Catfish", nameScientific: "Ancistrus Temminckii", qtyPerBox: 100 },
    { sn: 30, nameEnglish: "Burmese Border Loach", nameScientific: "Botia Dario", qtyPerBox: 70 },
    { sn: 31, nameEnglish: "Butterfly Pleco", nameScientific: "Dekeyseria Brachyura", qtyPerBox: 30 },
    { sn: 32, nameEnglish: "Ceylon Snakehead", nameScientific: "Channa Orientalis", qtyPerBox: 20 },
    { sn: 33, nameEnglish: "Celestial Pearl Danio", nameScientific: "Danio Margaritatus", qtyPerBox: 300 },
    { sn: 34, nameEnglish: "Cherry Barb", nameScientific: "Puntius Titteya", qtyPerBox: 200 },
    { sn: 35, nameEnglish: "Cherry Shrimp", nameScientific: "Neocaridina Davidi", qtyPerBox: 500 },
    { sn: 36, nameEnglish: "Clown Loach", nameScientific: "Chromobotia Macracanthus", qtyPerBox: 50 },
    { sn: 37, nameEnglish: "Convict Cichlid", nameScientific: "Amatitlania Nigrofasciata", qtyPerBox: 100 },
    { sn: 38, nameEnglish: "Corydoras", nameScientific: "Corydoras Paleatus", qtyPerBox: 300 },
    { sn: 39, nameEnglish: "Denison Barb", nameScientific: "Sahyadria Denisonii", qtyPerBox: 150 },
    { sn: 40, nameEnglish: "Dwarf Gourami", nameScientific: "Trichogaster Lalius", qtyPerBox: 200 },
    { sn: 41, nameEnglish: "Electric Blue Jack Dempsey", nameScientific: "Rocio Octofasciata", qtyPerBox: 50 },
    { sn: 42, nameEnglish: "Ember Tetra", nameScientific: "Hyphessobrycon Amandae", qtyPerBox: 300 },
    { sn: 43, nameEnglish: "Endler's Livebearer", nameScientific: "Poecilia Wingei", qtyPerBox: 200 },
    { sn: 44, nameEnglish: "Featherfin Squeaker", nameScientific: "Synodontis Eupterus", qtyPerBox: 30 },
    { sn: 45, nameEnglish: "Figure 8 Puffer", nameScientific: "Tetraodon Biocellatus", qtyPerBox: 40 },
    { sn: 46, nameEnglish: "Firemouth Cichlid", nameScientific: "Thorichthys Meeki", qtyPerBox: 100 },
    { sn: 47, nameEnglish: "Frontosa", nameScientific: "Cyphotilapia Frontosa", qtyPerBox: 20 },
    { sn: 48, nameEnglish: "GloFish", nameScientific: "Danio Rerio", qtyPerBox: 500 },
    { sn: 49, nameEnglish: "Glass Catfish", nameScientific: "Kryptopterus Bicirrhis", qtyPerBox: 100 },
    { sn: 50, nameEnglish: "Gold Barb", nameScientific: "Barbodes Semifasciolatus", qtyPerBox: 200 },
    { sn: 51, nameEnglish: "Goldfish", nameScientific: "Carassius Auratus", qtyPerBox: 100 },
    { sn: 52, nameEnglish: "Green Swordtail", nameScientific: "Xiphophorus Hellerii", qtyPerBox: 200 },
    { sn: 53, nameEnglish: "Guppy", nameScientific: "Poecilia Reticulata", qtyPerBox: 500 },
    { sn: 54, nameEnglish: "Harlequin Rasbora", nameScientific: "Trigonostigma Heteromorpha", qtyPerBox: 300 },
    { sn: 55, nameEnglish: "Honey Gourami", nameScientific: "Trichogaster Chuna", qtyPerBox: 100 },
    { sn: 56, nameEnglish: "Jack Dempsey", nameScientific: "Rocio Octofasciata", qtyPerBox: 40 },
    { sn: 57, nameEnglish: "Julidochromis", nameScientific: "Julidochromis Marlieri", qtyPerBox: 30 },
    { sn: 58, nameEnglish: "Killifish", nameScientific: "Nothobranchius Rachovii", qtyPerBox: 200 },
    { sn: 59, nameEnglish: "Kissing Gourami", nameScientific: "Helostoma Temminckii", qtyPerBox: 50 },
    { sn: 60, nameEnglish: "Koi", nameScientific: "Cyprinus Rubrofuscus", qtyPerBox: 20 },
    { sn: 61, nameEnglish: "Kuhli Loach", nameScientific: "Pangio Kuhlii", qtyPerBox: 150 },
    { sn: 62, nameEnglish: "Lampeye", nameScientific: "Aplocheilichthys Normani", qtyPerBox: 200 },
    { sn: 63, nameEnglish: "Leopard Bushfish", nameScientific: "Ctenopoma Acutirostre", qtyPerBox: 30 },
    { sn: 64, nameEnglish: "Leopard Danio", nameScientific: "Danio Rerio", qtyPerBox: 300 },
    { sn: 65, nameEnglish: "Lemon Tetra", nameScientific: "Hyphessobrycon Pulchripinnis", qtyPerBox: 200 },
    { sn: 66, nameEnglish: "Lifesaver Tetra", nameScientific: "Hyphessobrycon Columbianus", qtyPerBox: 100 },
    { sn: 67, nameEnglish: "Lobster", nameScientific: "Procambarus Clarkii", qtyPerBox: 50 },
    { sn: 68, nameEnglish: "Longfin Zebra Danio", nameScientific: "Danio Rerio", qtyPerBox: 300 },
    { sn: 69, nameEnglish: "Neon Tetra", nameScientific: "Paracheirodon Innesi", qtyPerBox: 500 },
    { sn: 70, nameEnglish: "Oscar", nameScientific: "Astronotus Ocellatus", qtyPerBox: 20 },
    { sn: 71, nameEnglish: "Otocinclus", nameScientific: "Otocinclus Affinis", qtyPerBox: 100 },
    { sn: 72, nameEnglish: "Panda Cory", nameScientific: "Corydoras Panda", qtyPerBox: 200 },
    { sn: 73, nameEnglish: "Pearl Gourami", nameScientific: "Trichopodus Leerii", qtyPerBox: 100 },
    { sn: 74, nameEnglish: "Peppered Cory", nameScientific: "Corydoras Paleatus", qtyPerBox: 300 },
    { sn: 75, nameEnglish: "Platy", nameScientific: "Xiphophorus Maculatus", qtyPerBox: 500 },
    { sn: 76, nameEnglish: "Puffer Fish", nameScientific: "Carinotetraodon Travancoricus", qtyPerBox: 50 },
    { sn: 77, nameEnglish: "Rainbow Shark", nameScientific: "Epalzeorhynchos Frenatum", qtyPerBox: 40 },
    { sn: 78, nameEnglish: "Ram Cichlid", nameScientific: "Mikrogeophagus Ramirezi", qtyPerBox: 30 },
    { sn: 79, nameEnglish: "Red Tail Shark", nameScientific: "Epalzeorhynchos Bicolor", qtyPerBox: 30 },
    { sn: 80, nameEnglish: "Roseline Shark", nameScientific: "Sahyadria Denisonii", qtyPerBox: 50 },
    { sn: 81, nameEnglish: "Rosy Barb", nameScientific: "Pethia Conchonius", qtyPerBox: 200 },
    { sn: 82, nameEnglish: "Rummy Nose Tetra", nameScientific: "Hemigrammus Rhodostomus", qtyPerBox: 300 },
    { sn: 83, nameEnglish: "Siamese Algae Eater", nameScientific: "Crossocheilus Siamensis", qtyPerBox: 150 },
    { sn: 84, nameEnglish: "Silver Dollar", nameScientific: "Metynnis Hypsauchen", qtyPerBox: 40 },
    { sn: 85, nameEnglish: "Sterba's Cory", nameScientific: "Corydoras Sterbai", qtyPerBox: 100 },
    { sn: 86, nameEnglish: "Swordtail", nameScientific: "Xiphophorus Hellerii", qtyPerBox: 300 },
    { sn: 87, nameEnglish: "Zebra Danio", nameScientific: "Danio Rerio", qtyPerBox: 300 }
  ];

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getFishData(): Observable<any[]> {
    return of(this.fishList)
  }

  GetFishList(): Observable<any[]>{
    return this.searchSubject.pipe(
      map((searchTerm: string) =>{
        if(!searchTerm){
          return this.fishList;
        }
        searchTerm = searchTerm.toLowerCase();
        return this.fishList.filter(fish => fish.nameEnglish.toLowerCase().includes(searchTerm));
      })
    );
  }

  setSearchTerm(term: string){
    this.searchSubject.next(term);
  }

}
