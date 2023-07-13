import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ICharacter } from '@interfaces/character';
import { CharacterService } from '@services/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  characterId: number = 0;
  character: ICharacter = {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {name:"", url:""},
    location: {name:"", url:""},
    image: "",
    episode: [],
    url: "",
    created: ""
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    const characterId = this.activatedRoute.snapshot.paramMap.get('characterId');
    if(characterId){
      this.characterId =  parseInt(characterId);      
      this.getDetailCharacter(this.characterId);
    }    
  }

  getDetailCharacter(id: number) {
    this.characterService.getById<ICharacter>(id).subscribe(res => {
      this.character = res;
    })
  }
}