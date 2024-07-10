import { Injectable } from '@angular/core';
import { Observable , map, BehaviorSubject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private fishList = [
    
      { "sn": 1, "nameEnglish": "Arowana (Small)", "nameScientific": "Heteroties Niloticus", "qtyPerBox": 100 },
      { "sn": 2, "nameEnglish": "Arowana (Medium)", "nameScientific": "Heteroties Niloticus", "qtyPerBox": 80 },
      { "sn": 3, "nameEnglish": "Aba Knife Fish", "nameScientific": "Gymnarnus Niloticus", "qtyPerBox": 300 },
      { "sn": 4, "nameEnglish": "African Phago", "nameScientific": "Phago Muculatus", "qtyPerBox": 100 },
      { "sn": 5, "nameEnglish": "African Shark", "nameScientific": "Labeo Senegalensis", "qtyPerBox": 30 },
      { "sn": 6, "nameEnglish": "Aquatic Clawd Frog", "nameScientific": "Xenopus Laevis", "qtyPerBox": 400 },
      { "sn": 7, "nameEnglish": "African Tree Frogs", "nameScientific": "Hyperolius Sp.", "qtyPerBox": 400 },
      { "sn": 8, "nameEnglish": "Alestes Tetra", "nameScientific": "Brycinus Longipinnis", "qtyPerBox": 130 },
      { "sn": 9, "nameEnglish": "Aphyeseimion Killi", "nameScientific": "Aphyeseimion (Various)", "qtyPerBox": 400 },
      { "sn": 10, "nameEnglish": "Aluminum Cat", "nameScientific": "Chryciltus Brachynema", "qtyPerBox": 130 },
      { "sn": 11, "nameEnglish": "Atya Shrimps (Small)", "nameScientific": "Atya Gabonensis", "qtyPerBox": 200 },
      { "sn": 12, "nameEnglish": "Atya Shrimps (Medium)", "nameScientific": "Atya Gabonensis", "qtyPerBox": 100 },
      { "sn": 13, "nameEnglish": "Atya Shrimps (Large)", "nameScientific": "Atya Gabonensis", "qtyPerBox": 40 },
      { "sn": 14, "nameEnglish": "Butterfly (Small)", "nameScientific": "Pantondon Bucholzi", "qtyPerBox": 150 },
      { "sn": 15, "nameEnglish": "Blue Fish", "nameScientific": "Aplocheilicthys Myersi", "qtyPerBox": 300 },
      { "sn": 16, "nameEnglish": "Blood Fish", "nameScientific": "Phractolaemus Ansorgi", "qtyPerBox": 50 },
      { "sn": 17, "nameEnglish": "Blue Diamond Tetra", "nameScientific": "Alestopetersius Smykalai", "qtyPerBox": 150 },
      { "sn": 18, "nameEnglish": "Bitenainatu", "nameScientific": "Aphyeseimion Bitenainatu", "qtyPerBox": 40 },
      { "sn": 19, "nameEnglish": "Brachy", "nameScientific": "Synodontis Batensoda", "qtyPerBox": 50 },
      { "sn": 20, "nameEnglish": "Bush Fish", "nameScientific": "Ctenopoma Maculatus", "qtyPerBox": 40 },
      { "sn": 21, "nameEnglish": "Bagrus (Shovel Head)", "nameScientific": "Bagrus Ubagensis", "qtyPerBox": 50 },
      { "sn": 22, "nameEnglish": "Barbs", "nameScientific": "Barboides Graciis", "qtyPerBox": 300 },
      { "sn": 23, "nameEnglish": "Blue Panchax", "nameScientific": "Aplocheilus Panchax", "qtyPerBox": 300 },
      { "sn": 24, "nameEnglish": "Congo Tetra", "nameScientific": "Phenacogramus Interutus", "qtyPerBox": 420 },
      { "sn": 25, "nameEnglish": "Clarias Cat", "nameScientific": "Clarias Angolensis", "qtyPerBox": 100 },
      { "sn": 26, "nameEnglish": "Debawie Cat", "nameScientific": "Eutropiellus Debawie", "qtyPerBox": 50 },
      { "sn": 27, "nameEnglish": "Dolphin", "nameScientific": "Mormyrop Hasselquistii", "qtyPerBox": 40 },
      { "sn": 28, "nameEnglish": "Dwarff Cat", "nameScientific": "Microsynodontis Polli", "qtyPerBox": 50 },
      { "sn": 29, "nameEnglish": "Deltahens", "nameScientific": "Fundolupanchax Deltahens", "qtyPerBox": 100 },
      { "sn": 30, "nameEnglish": "Eel Cat", "nameScientific": "Chanallabes Apus", "qtyPerBox": 50 },
      { "sn": 31, "nameEnglish": "Electric Cat (Small)", "nameScientific": "Malapterurus Electricus", "qtyPerBox": 100 },
      { "sn": 32, "nameEnglish": "Electric Cat (Medium)", "nameScientific": "Malapterurus Electricus", "qtyPerBox": 50 },
      { "sn": 33, "nameEnglish": "Endlicheri Polypterus", "nameScientific": "Polypterus Endlicheri", "qtyPerBox": 30 },
      { "sn": 34, "nameEnglish": "Freshwater Shrimps", "nameScientific": "Gammarus Pulex", "qtyPerBox": 500 },
      { "sn": 35, "nameEnglish": "Glass Cat", "nameScientific": "Parailia Pellucida", "qtyPerBox": 200 },
      { "sn": 36, "nameEnglish": "Goby", "nameScientific": "Gobiidae Sp.", "qtyPerBox": 100 },
      { "sn": 37, "nameEnglish": "Grass Cutter", "nameScientific": "Schilbe Mystus", "qtyPerBox": 40 },
      { "sn": 38, "nameEnglish": "Giraffe Nose", "nameScientific": "Auchenoglanis Ocedent", "qtyPerBox": 30 },
      { "sn": 39, "nameEnglish": "Guppy", "nameScientific": "Poecilia Reticulata", "qtyPerBox": 500 },
      { "sn": 40, "nameEnglish": "Jewel Fish", "nameScientific": "Hemicheomis Binaculatus", "qtyPerBox": 100 },
      { "sn": 41, "nameEnglish": "Knife Fish", "nameScientific": "Xenomystus Nigri", "qtyPerBox": 50 },
      { "sn": 42, "nameEnglish": "Kribensis (Red Belly)", "nameScientific": "Pelvicachromis Pulcher", "qtyPerBox": 50 },
      { "sn": 43, "nameEnglish": "Kribensis", "nameScientific": "Pelvicachromis Elongatus", "qtyPerBox": 50 },
      { "sn": 44, "nameEnglish": "Kribensis", "nameScientific": "Pelvicachromis Taeniatus", "qtyPerBox": 50 },
      { "sn": 45, "nameEnglish": "Lampeye", "nameScientific": "Aplocheilichthys Myersi", "qtyPerBox": 200 },
      { "sn": 46, "nameEnglish": "Lapladi", "nameScientific": "Polypterus Lapladi", "qtyPerBox": 30 },
      { "sn": 47, "nameEnglish": "Leaf Fish", "nameScientific": "Ctenopoma Sp.", "qtyPerBox": 50 },
      { "sn": 48, "nameEnglish": "Longnose/Elephant", "nameScientific": "Gnathonemus Petersii", "qtyPerBox": 20 },
      { "sn": 49, "nameEnglish": "Lusoso", "nameScientific": "Distichodu Lusoso", "qtyPerBox": 30 },
      { "sn": 50, "nameEnglish": "Lungfish (Small/Med)", "nameScientific": "Protopterus Annechtensudollot", "qtyPerBox": 10 },
      { "sn": 51, "nameEnglish": "Long-Fin Alestes", "nameScientific": "Hemigrammus Caudalis", "qtyPerBox": 200 },
      { "sn": 52, "nameEnglish": "Lace Cat", "nameScientific": "Synodontis Budgetti", "qtyPerBox": 40 },
      { "sn": 53, "nameEnglish": "Mable Knife (Small)", "nameScientific": "Notopterus Chitala", "qtyPerBox": 20 },
      { "sn": 54, "nameEnglish": "Mable Knife (Medium)", "nameScientific": "Notopterus Chitala", "qtyPerBox": 10 },
      { "sn": 55, "nameEnglish": "Niger Tetra", "nameScientific": "Neolebias Anomalus", "qtyPerBox": 200 },
      { "sn": 56, "nameEnglish": "Oreochromis", "nameScientific": "Sarotherodon Galilaeus", "qtyPerBox": 100 },
      { "sn": 57, "nameEnglish": "Oreochromis", "nameScientific": "Tilapia Guineensis", "qtyPerBox": 100 },
      { "sn": 58, "nameEnglish": "Phantom Fish", "nameScientific": "Hyperopisus Bebe", "qtyPerBox": 40 },
      { "sn": 59, "nameEnglish": "Pipe Fish", "nameScientific": "Syngnathus Sp.", "qtyPerBox": 50 },
      { "sn": 60, "nameEnglish": "Purple Eel", "nameScientific": "Mastacembelus Nigromarginatus", "qtyPerBox": 40 },
      { "sn": 61, "nameEnglish": "Pike Characin", "nameScientific": "Hepsetus Odoe", "qtyPerBox": 100 },
      { "sn": 62, "nameEnglish": "Pumpkin Seed Fish", "nameScientific": "Pseudocrenilabrus Multicolor", "qtyPerBox": 100 },
      { "sn": 63, "nameEnglish": "Purple Eel", "nameScientific": "Caecomastacembelus", "qtyPerBox": 50 },
      { "sn": 64, "nameEnglish": "Red Jewel Fish", "nameScientific": "Hemichromis Lifalili", "qtyPerBox": 100 },
      { "sn": 65, "nameEnglish": "Red Eye Tetra", "nameScientific": "Moenckhausia Sanctaefilomenae", "qtyPerBox": 200 },
      { "sn": 66, "nameEnglish": "Synodontis (2)", "nameScientific": "Synodontis Clarias", "qtyPerBox": 40 },
      { "sn": 67, "nameEnglish": "Synodontis (1)", "nameScientific": "Synodontis Ocellifer", "qtyPerBox": 40 },
      { "sn": 68, "nameEnglish": "Synodontis", "nameScientific": "Synodontis Nigromaculatus", "qtyPerBox": 40 },
      { "sn": 69, "nameEnglish": "Saddled Bichir", "nameScientific": "Polypterus Endlicheri", "qtyPerBox": 50 },
      { "sn": 70, "nameEnglish": "Spotted Fish", "nameScientific": "Pelvicachromis Pulcher", "qtyPerBox": 200 },
      { "sn": 71, "nameEnglish": "Spotted Tilapia", "nameScientific": "Tilapia Mariae", "qtyPerBox": 50 },
      { "sn": 72, "nameEnglish": "Spotted Ctenopoma", "nameScientific": "Ctenopoma Kingsleyae", "qtyPerBox": 50 },
      { "sn": 73, "nameEnglish": "Senegal Bichir", "nameScientific": "Polypterus Senegalus", "qtyPerBox": 100 },
      { "sn": 74, "nameEnglish": "Spot Gutted Cat", "nameScientific": "Phractolaemus Ansorgi", "qtyPerBox": 200 },
      { "sn": 75, "nameEnglish": "Schalnsi", "nameScientific": "Fundulopanchax Scheel", "qtyPerBox": 300 },
      { "sn": 76, "nameEnglish": "Siamese Fighting Fish", "nameScientific": "Betta Splendens", "qtyPerBox": 100 },
      { "sn": 77, "nameEnglish": "Schoutedeni", "nameScientific": "Microsynodontis Batissoides", "qtyPerBox": 50 },
      { "sn": 78, "nameEnglish": "Tiger Fish", "nameScientific": "Hydrocynus Forskahlii", "qtyPerBox": 100 },
      { "sn": 79, "nameEnglish": "Tilapia Buttikofferi", "nameScientific": "Tilapia Buttikofferi", "qtyPerBox": 50 },
      { "sn": 80, "nameEnglish": "Tilapia Fish", "nameScientific": "Tilapia Zilli", "qtyPerBox": 50 },
      { "sn": 81, "nameEnglish": "Tilapia", "nameScientific": "Tilapia Dispersus", "qtyPerBox": 50 },
      { "sn": 82, "nameEnglish": "Tetraodon", "nameScientific": "Tetraodon Fahaka", "qtyPerBox": 100 },
      { "sn": 83, "nameEnglish": "Tetraodon", "nameScientific": "Tetraodon Lineatus", "qtyPerBox": 100 },
      { "sn": 84, "nameEnglish": "Tilapia", "nameScientific": "Tilapia Guineensis", "qtyPerBox": 100 },
      { "sn": 85, "nameEnglish": "Upsidedown Cat", "nameScientific": "Synodontis Nigriventris", "qtyPerBox": 200 },
      { "sn": 86, "nameEnglish": "Upsidedown Cat", "nameScientific": "Synodontis Serpens", "qtyPerBox": 200 },
      { "sn": 87, "nameEnglish": "West African Cichlids", "nameScientific": "Anomalochromis Thomasi", "qtyPerBox": 50 },
      { "sn": 88, "nameEnglish": "West African Cichlids", "nameScientific": "Paratilapia Polleni", "qtyPerBox": 50 },
      { "sn": 89, "nameEnglish": "Whale Fish", "nameScientific": "Mormyrus Rume", "qtyPerBox": 50 },
      { "sn": 90, "nameEnglish": "Whale Fish", "nameScientific": "Petrocephalus Bane", "qtyPerBox": 50 },
      { "sn": 91, "nameEnglish": "X-Ray Fish", "nameScientific": "Pristella Maxillaris", "qtyPerBox": 500 },
      { "sn": 92, "nameEnglish": "Zebra Fish", "nameScientific": "Pelvicachromis Taeniatus", "qtyPerBox": 50 }
  
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
