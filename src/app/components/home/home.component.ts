import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.Service';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalService } from 'src/app/shared/modals/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loadingTeams: boolean = false;
  teams: Array<any> = [];
  favorites: any = {};
  constructor(
    private httpService: HttpService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loadTeam('Premier League');

  }

  loadTeam(key: string) {
    this.loadingTeams = true;
    this.httpService.getTeamsByLeague(key)
      .subscribe(({ teams }: any) => {
        console.log(teams);
        Object.assign(this.teams, teams);
        this.loadFavorites();
        this.loadingTeams = false;
      }, (err: HttpErrorResponse) => {
        console.error(err);
        this.loadingTeams = false;
      })
  }

  orderTeam() {
    this.teams.sort((a: any, b: any) => {
      let x = this.favorites[a.idTeam];
      let y = this.favorites[b.idTeam];
      return (x === y) ? 0 : x ? -1 : 1;
    })
  }

  loadFavorites() {
    let teamsID = localStorage.getItem('teamsFavorites');
    this.favorites = teamsID ? JSON.parse(teamsID) : {};
    this.orderTeam();
  }


  openModal(team) {
    this.modalService.open('MODAL_TEAM', team);
  }


  upsertToFavorite({ idTeam }, value) {
    this.favorites[idTeam] = value;
    localStorage.setItem('teamsFavorites', JSON.stringify(this.favorites));
    this.orderTeam();
  }

  isFavorite(id) {
    return this.favorites[id] ? true : false;
  }

}
