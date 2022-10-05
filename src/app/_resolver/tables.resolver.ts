import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError, map } from 'rxjs/operators'
import { DadosService } from '../_services/dados.service';
import { state } from '@angular/animations';


@Injectable()
export class LaudosTablesResolver implements Resolve<any> {

  constructor(private tableDataService: DadosService) { }

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getAll()
        .subscribe((tableData: any) => {
          console.log("tableData", tableData)
          return resolve({
            dados: tableData,
          });
        });
    });
  }
}


