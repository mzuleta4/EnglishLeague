import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable()

export class ModalService {

    private _listners = new Subject<any>();
    constructor() { }


    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    filter(filterBy: any) {
        this._listners.next(filterBy);
    }

    data: any = {};
    dataSecondary = {};
    selected = null;
    selectedSecondary = null;
    open(opModal: string, data) {
        this.data = data;
        this.selected = opModal;
    }


    close() {
        this.selected = null;
        this.data = {};
    }
}