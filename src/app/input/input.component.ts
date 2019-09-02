import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';
import * as _ from 'lodash';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  loading = true;
  alertMessage = null;
  alertSuccess = false;
  alertError = false;
  loadingWhileResponse = false;

  movement = null;
  emptyMovement = null;
  warehouses = null;
  customs = null;
  referenceTypes = null;
  users = null;
  usersForSearch = [];

  selectedUser = null;
  realizedDate = null;
  newWarehouse = {id: null, name: null, code: null};
  newReferenceType = null;
  recepientAddress = null;
  newCustoms = null;

  constructor(
    private httpClient: HttpClient,
    private _location: Location,
    private modalService: NgbModal
  ) { }

  goBack() {
    this._location.back();
  }

  cancel() {
    this.movement = _.cloneDeep(this.emptyMovement);
  }

  setTimeOutSuccess() {
    setTimeout(() => {
      this.alertSuccess = false;
      this.alertMessage = null;
    }, 5000);
  }

  setTimeOutError() {
    setTimeout(() => {
      this.alertError = false;
      this.alertMessage = null;
    }, 5000);
  }


  getEmptyMovement() {
    this.loading = true;
    this.httpClient.get(environment.apiUrl + '/movement/empty', {params: {type: 'input'}}).subscribe(
      (res) => {
        this.movement = res;
        this.emptyMovement = res;
        this.loading = false;
        console.log(this.movement);
      }
    );
  }

  getWarehouses() {
    this.warehouses = null;
    this.httpClient.get(environment.apiUrl + '/warehouse').subscribe(
      res => {
        this.warehouses = res;
      }
    );
  }

  getCustoms() {
    this.customs = null;
    this.httpClient.get(environment.apiUrl + '/customs').subscribe(
      res => {
        this.customs = res;
      }
    );
  }

  getReferenceType() {
    this.referenceTypes = null;
    this.httpClient.get(environment.apiUrl + '/referencetype').subscribe(
      res => {
        this.referenceTypes = res;
      }
    );
  }

  getUser() {
    this.httpClient.get(environment.apiUrl + '/user').subscribe(
      (res) => {
        this.users = res;
        this.users.forEach(user => {
          this.usersForSearch.push(user.firstName + ' ' + user.lastName);
        });
      }
    );
  }

  createWarehouse(warehouseModal) {
    this.modalService.open(warehouseModal, {centered: true}).result.then(
      () => {
        this.httpClient.post(environment.apiUrl + '/warehouse/create', this.newWarehouse).subscribe(
          (response: any) => {
            this.alertMessage = response.msg;
            this.alertSuccess = true;
            this.getWarehouses();
            this.setTimeOutSuccess();
          },
          (error: any) => {
            this.alertMessage = error.error.msg;
            this.alertError = true;
            this.setTimeOutError();
          }
        );
        this.newWarehouse.code = null;
        this.newWarehouse.name = null;
      }
    );
  }

  createReference(referenceModal) {
    this.modalService.open(referenceModal, {centered: true}).result.then(
      () => {
        this.httpClient.post(environment.apiUrl + '/referencetype/create', this.newReferenceType).subscribe(
          (response: any) => {
            this.alertMessage = response.msg;
            this.alertSuccess = true;
            this.getReferenceType();
            this.setTimeOutSuccess();
          },
          (error: any) => {
            this.alertMessage = error.error.msg;
            this.alertError = true;
            this.setTimeOutError();
          }
        );
        this.newReferenceType = null;
      }
    );
  }

  isCustomsStatusNotExisting() {
    let res = false;
    this.customs.forEach(el => {
      if (this.newCustoms != null) {
        if (el.status == this.newCustoms.toUpperCase()) {
          res = true;
        }
      }
    });
    return res;
  }

  createCustoms(customsModal) {
    this.modalService.open(customsModal, {centered: true}).result.then(
      () => {
        this.httpClient.post(environment.apiUrl + '/customs/create', this.newCustoms).subscribe(
          (response: any) => {
            this.alertMessage = response.msg;
            this.alertSuccess = true;
            this.getCustoms();
            this.setTimeOutSuccess();
          },
          (error: any) => {
            this.alertMessage = error.error.msg;
            this.alertError = true;
            this.setTimeOutError();
          }
        );
        this.newCustoms = null;
      }
    );
  }

  createInputMovement(submitModal) {
    this.modalService.open(submitModal, {centered: true}).result.then(
      () => {
        this.loadingWhileResponse = true;
        if (this.realizedDate.month.length !== 2) {
          this.realizedDate.month = '0' + this.realizedDate.month;
        }
        if (this.realizedDate.day.length === 1) {
          this.realizedDate.day = '0' + this.realizedDate.day;
        }
        let params = new HttpParams();
        params = params.append('user', this.selectedUser);
        params = params.append('date', this.realizedDate.year + '-' + this.realizedDate.month + '-' + this.realizedDate.day);
        params = params.append('email', this.recepientAddress);
        this.httpClient.post(environment.apiUrl + '/movement/createInput', this.movement, {params}).subscribe(
          (response: any) => {
            this.alertMessage = response.msg;
            this.getEmptyMovement();
            this.alertSuccess = true;
            this.setTimeOutSuccess();
            this.loadingWhileResponse = false;
          },
          (error: any) => {
            this.alertMessage = error.error.msg;
            this.alertError = true;
            this.setTimeOutError();
            this.loadingWhileResponse = false;
          }
        );
        this.selectedUser = null;
        this.realizedDate = null;
        this.recepientAddress = null;
      }
    );
  }

  searchUser = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 0 ? []
      : this.usersForSearch.filter(user => (user.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
  )

  cannotSubmit() {
    return (this.movement.merchandiseInfo.totalQuantity < this.movement.merchandiseInfo.quantity)
    || (this.movement.merchandiseInfo.totalWeight < this.movement.merchandiseInfo.weight)
    || (this.movement.originalWarehouse == null
    || this.movement.customs.status == null
    || this.movement.merchandiseInfo.referenceType == null
    || this.movement.merchandiseInfo.reference == null
    || this.movement.merchandiseInfo.quantity == null
    || this.movement.merchandiseInfo.weight == null
    || this.movement.merchandiseInfo.totalQuantity == null
    || this.movement.merchandiseInfo.totalWeight == null
    || (this.movement.merchandiseInfo.referenceType.name === 'AWB' && this.movement.merchandiseInfo.reference.length !== 11));
  }

  ngOnInit() {
    this.getEmptyMovement();
    this.getWarehouses();
    this.getCustoms();
    this.getReferenceType();
    this.getUser();
  }

}
