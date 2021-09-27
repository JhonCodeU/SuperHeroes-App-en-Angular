import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/components/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-charecter-details',
  templateUrl: './charecter-details.component.html',
  styleUrls: ['./charecter-details.component.scss']
})
export class CharecterDetailsComponent implements OnInit {

  character$!: Observable<Character>;
  constructor(private route:ActivatedRoute, private characterSvc:CharacterService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      console.log(id);
      
      this.character$ = this.characterSvc.getDetails(id);
    });
  }
  onGoBack():void{
    this.location.back();
    //windows.history.back()
  }

}
