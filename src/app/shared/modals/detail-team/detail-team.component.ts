import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { HttpService } from 'src/app/http.Service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {

  get data() { return this.modalService.data };
  get image_theme(): any {
    return this.data.strTeamFanart1;
  }

  thead = [
    "name",
    "played",
    "goalsfor",
    "goalsagainst",
    "goalsdifference",
    "win",
    "draw",
    "loss",
    "total"
  ]

  players: Array<any> = [];
  lastEvents: Array<any> = [];
  nextEvents: Array<any> = [];
  tbody: Array<any> = [];

  Selected: any = null;
  lastEventSelected: any = null;
  constructor(
    private modalService: ModalService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.getPlayers(this.data.idTeam);
    this.getLastEvents(this.data.idTeam);
    this.getNextEvents(this.data.idTeam);
    this.getPositions();
  }

  closeModal() {
    this.modalService.close()
  }

  getPlayers(key) {
    this.http.getListPlayersByTeam(key)
      .subscribe(({ player }: any) => {
        console.log(player);
        this.players = player;
      }, (err: HttpErrorResponse) => {
        console.log(err);
      })
  }


  getLastEvents(key) {
    this.http.getLastEventsByTeam(key)
      .subscribe(({ results }: any) => {
        console.log(results);
        this.lastEvents = results;
      }, (err: HttpErrorResponse) => {
        console.log(err);
      })
  }


  getNextEvents(key) {
    this.http.getNextEventsByTeam(key)
      .subscribe(({ events }: any) => {
        console.log(events);
        this.nextEvents = events;
      }, (err: HttpErrorResponse) => {
        console.log(err);
      })
  }



  getPositions() {
    this.http.getPosition()
      .subscribe(({ table }: any) => {
        console.log(table);
        this.tbody = table;
      }, (err: HttpErrorResponse) => {
        console.log(err);
      })
  }


  getGoals(data: string) {
    let array = data ? data.split(';') : [];
    return array.length ? array.filter(a => a) : [];
  }

}
