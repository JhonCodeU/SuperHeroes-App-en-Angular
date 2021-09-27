import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '@app/shared/services/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private characterSvc: CharacterService) { }

  @Input() dataFilter:any;
  ngOnInit(): void {
  }
  
  clickMe(filter: any){
    this.dataFilter = filter
    this.characterSvc.triggerFilter.emit({
      filter
    
    });
    alert("El filtro esta quemado pero funciona solo que fue un poco dificil pasar datos entre componentes "+filter);
  }

}
