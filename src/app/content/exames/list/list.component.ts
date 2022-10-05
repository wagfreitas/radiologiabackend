import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { AuthService } from '../../../_services/auth.service';
import { AlertService } from '../../../_services/alert.service';
import { MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DadosService } from '../../../_services/dados.service';

import * as FileSaver from 'file-saver';
import { DatePipe } from '@angular/common';



const COMMA = 188;
const ENTER = 13;

export class Exame {
  nome: string;
  datePub: any;
  idade: number;
  tipoExame: string;
  como: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./styles/list.component.scss'],
})
export class ListComponent implements OnInit {
  //subscription: Subscription;

  @ViewChild('f', { read: true, static: false }) userProfileForm: NgForm;

  model: any = {};

  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @BlockUI('userProfile') blockUIUserProfile: NgBlockUI;

  options = {
    minimize: true,
    reload: true,
    expand: true,
    close: true
  };
  public breadcrumb: any;
  cadEquipe: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';
  successMessage = '';
  dados = [];
  exames: any;

  private paginator: MatPaginator;
  private sort: MatSort;


  displayedColumns1 = ['nome', 'tipoExame', 'idade', 'data', 'status', 'acao'];
  dataSource1: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator, { static: false } ) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  @ViewChild('htmlData', {static: false}) htmlData: ElementRef;


  selection = new SelectionModel<any>(true, []);
  originalData = [];
  filtersForm: FormGroup;
  filtersVisible = true;
  toggleFiltersLabel = 'Ocultar Filtros';

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private dadosService: DadosService,
     private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute
   ) {
    // exame é o nome dado no modulo para os dados do resolver
    this.originalData = this.route.snapshot.data['exame'].dados;
    this.originalData['status'] = 'Baixar'
    console.log("dados recebidos", this.originalData)
    this.dataSource1 = new MatTableDataSource(this.originalData);

   }

  setDataSourceAttributes() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
  }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Lista de Cirurgias ',
      'links': [
        {
          'name': 'Inicio',
          'isLink': true,
          'link': '/changelog'
        },
        {
          'name': 'Cadastros',
          'isLink': true,
          'link': '#'
        }

      ]
    };


  }

  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    console.log("filtro", this.dataSource1.data.filter)
    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  edit(dados){

   let exames = dados['tipoexame']
   let dtNiver = dados.niver.seconds * 1000
   let dtConsulta = dados.data.seconds * 1000

   exames.forEach(element => {
//${this.datePipe.transform(dados.niver,"yyyyddMM")}
      var text = `(0010,0010) PN	${dados.firstName} \n`
         text = text +  `(0010,0020) LO	${dados.cpf}  \n`
         text = text +  `(0010,0030) DA	${this.datePipe.transform(dtNiver,"yyyyddMM")} \n`
         text = text +  `(0010,0040) CS	${dados.sexo}\n`
         text = text +  `(0032,1032) PN	${dados.medico} \n`
         text = text +  `(0032,1060) LO	${element} \n`
         text = text +  `(0008,0060) CS	${dados.equipamento} \n`
         text = text +  `(0040,0002) DA	${dtConsulta} \n`
         text = text +  `(0040,0003) TM	${dados.horaConsulta} \n`
         text = text +  `(0040,0006) PN	${dados.tecnico} \n`
         text = text +  `(0040,0007) LO	${dados.descricao} \n`
         text = text +  `(0040,0009) SH	SPD3445B\n`
         text = text +  `(0040,0011) SH	B34F56B\n`
         text = text +  `(0040,1001) SH	RP454G234B\n`
         text = text +  `(0008,0050) SH	${dados.id} \n`
         text = text +  `(0020,000D) UI  ${dados.meunr}`


        let blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, dados.id+dados.descricao+'.txt');

    // console.log('extraindo',element)

   });

   this.dadosService.updateExame(dados.id)

  }


}
