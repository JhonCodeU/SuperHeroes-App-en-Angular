import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Character } from '@app/shared/components/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-charecter-list',
  templateUrl: './charecter-list.component.html',
  styleUrls: ['./charecter-list.component.scss'],
  providers: [CharacterService]
})
export class CharecterListComponent implements OnInit {

  //public characters:Character[] = [];
  public characters: Array<Character> = []
  public filters: Array<Character> = [] //vacio
  selectedMessage:string = '';

  private pageNum = 1;
  private filter:string = 'all';
  private query: string | undefined;
  private hideScrollbar = 200;
  private showScrollbar = 500;
  route: any;

  constructor(private characterSvc: CharacterService) {}

  ngOnInit(): void {
    this.getHeroes();

    this.characterSvc.triggerFilter.subscribe(data => {
      console.log(data);
    },err => console.log(err))
  }

  clickMe(filter: any){
    alert(filter);
  };

  private getHeroes(){
        
    this.characterSvc.getAll()
    .pipe(take(1)).subscribe(res => {

      if (res != null) {
        this.filters = res;
        //this.characters = res;
        console.log(this.filter);

        if (this.filter == 'all') {
          this.characters = res;
        }else if (this.filter == 'good') {
          this.characters = [];
          this.filters.forEach(hero => {
            if (hero.biography.alignment == 'good') {
              this.characters.push(hero);
            }
          });
          this.characters;

        }else if (this.filter == 'bad') {
          this.characters = [];
          this.filters.forEach(hero => {
            if (hero.biography.alignment == 'bad') {
              this.characters.push(hero);
            }
          });
          this.characters;
        }
        //const {biography, powerstats} = res;
        //debugger;
        console.log('Response: ',this.characters);
      }

    },err => console.log(err));

    //this.getDataFromService();
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      this.query = '';
      this.getDataFromService();
    });
  }

  private getDataFromService():void {
    
    this.characterSvc
    .searchCharacter(this.query)
    .pipe(take(1))
    .subscribe((res: any ) => {
      console.log('Response: ',res);
    });
  }

}
