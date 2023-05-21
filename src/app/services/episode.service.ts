import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@services/base.service';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EpisodeService extends BaseService {

    private endpoint: string = `${environment.api}episode`;

    constructor(private http: HttpClient) {
        super(http)
        this.setEndPoint(this.endpoint)
    }

}
