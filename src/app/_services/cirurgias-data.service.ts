import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CirurgiasDataService {

  constructor(
    private cirurgiaSource = new BehaviorSubject({ cirurgia: null, key: '' }),
    public currentCirugia = cirurgiaSource.asObservable()) { }

  changeContato(cirurgia: any, key: string) {
    this.cirurgiaSource.next({ cirurgia: cirurgia, key: key });
  }
}
