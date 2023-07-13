import { Component, OnInit } from '@angular/core';
import { IEpisode } from '@interfaces/episode';
import { IResponse } from '@interfaces/response';
import { EpisodeService } from '@services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  episodes: Array<IEpisode> = [];

  constructor(
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
    this.getAllEpisode();    
  }

  getAllEpisode() {
    this.episodeService.getAll<IResponse<IEpisode[]>>().subscribe(res => {
      this.episodes = res.results;
    })
  }
}
