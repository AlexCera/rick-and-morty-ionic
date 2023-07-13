import { Component, OnInit } from '@angular/core';
import { ICharacter } from '@interfaces/character';
import { NavigationService } from '@services/navigation.service';
import { LocalstorageService } from '@services/localstorage.service';
import { CharacterService } from '@services/character.service';
import { IResponse } from '@interfaces/response';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  viewList: boolean = true;
  characters: Array<ICharacter> = [];

  constructor(
    private navigationService: NavigationService,
    private localStorageService: LocalstorageService,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.ModeList(false);
    this.getAllCharacter();
  }

  getAllCharacter() {
    this.characterService.getAll<IResponse<ICharacter[]>>().subscribe(res => {
      this.characters = res.results;
    })
  }

  DetailCharacter(id: number) {
    this.navigationService.navigate(`character/detail/${id}`)
  }

  navigate(route: string) {
    this.navigationService.navigate(route)
  }

  ModeList(change: boolean) {
    if (change) {
      this.viewList = !this.viewList
    }

    if (!change && this.localStorageService.existKey("viewListCharacter")) {
      this.viewList = this.localStorageService.get("viewListCharacter") == "true" ? true : false;
    }

    this.localStorageService.set("viewListCharacter", this.viewList)
  }
}