import { Component, OnInit } from '@angular/core';
import { ILocation } from '@interfaces/location';
import { IResponse } from '@interfaces/response';
import { LocationService } from '@services/location.service';

@Component({
  selector: 'app-episode',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  locations: Array<ILocation> = [];

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getAllepisode();
  }


  getAllepisode() {
    this.locationService.getAll<IResponse<ILocation[]>>().subscribe(res => {
      this.locations = res.results;
    })
  }

}
