import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class HttpService {


    constructor(
        private http: HttpClient
    ) { }

    getTeamsByLeague(league) {
        return this.http.get(`${environment.API_URL}search_all_teams.php?l=English%20${league}`)
    }

    getListPlayersByTeam(id) {
        return this.http.get(`${environment.API_URL}lookup_all_players.php?id=${id}`)
    }

    getLastEventsByTeam(id) {
        return this.http.get(`${environment.API_URL}eventslast.php?id=${id}`)
    }

    getNextEventsByTeam(id) {
        return this.http.get(`${environment.API_URL}eventsnext.php?id=${id}`)
    }

    getPosition() {
        return this.http.get(`${environment.API_URL}lookuptable.php?l=4328&s=1920`)
    }

}