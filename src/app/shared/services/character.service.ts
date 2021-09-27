import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@shared/components/interfaces/character.interface';
import { environment } from '@environment/environment';
import { Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public filter: any;

  @Output() triggerFilter:EventEmitter<any> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  searchCharacter(query = ''){
    const filter = `${environment.baseUrlApi}`;
    return this.http.get<Character[]>(filter);
  }
  getDetails(id: number){
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`);
  }

  getAll():Observable<any>{
    return this.http.get<Character[]>(`${environment.baseUrlApi}`);
  }

  sendClickEvent(filter: string) {
    this.filter = filter;
    //this.subject.next(filter);
    alert(this.filter);
  }
  //return this.http.get<Character>(`${environment.baseUrlApi}/${id}`);


  getClickEvent(){
    return this.filter;
  }
}
