import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from '../../../src/environments/environment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private _location: Location
  ) { }

  reponse = null;

  movements = null;

  getMovements() {
    this.httpClient.get(environment.apiUrl + '/movement/last50').subscribe(
      res => {
        this.movements = res;
        console.log(res);
      }
    );
  }

  toDate(date: any) {
    if (date.monthValue.toString().length < 2) { date.monthValue = '0' + date.monthValue; }
    if (date.dayOfMonth.toString().length < 2) { date.dayOfMonth = '0' + date.dayOfMonth; }
    if (date.hour.toString().length < 2) { date.hour = '0' + date.hour; }
    if (date.minute.toString().length < 2) { date.minute = '0' + date.minute; }
    if (date.second.toString().length < 2) { date.second = '0' + date.second; }
    return date.year + '-' + date.monthValue + '-' + date.dayOfMonth + ' ' + date.hour + ':' + date.minute + ':' + date.second;
  }

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    this.getMovements();
  }

}
