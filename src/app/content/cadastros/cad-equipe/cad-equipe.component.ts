
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { AuthService } from '../../../_services/auth.service';
import { AlertService } from '../../../_services/alert.service';
//import * as FileSaver from 'file-saver';

import { DatePipe } from '@angular/common';
import { DadosService } from '../../../_services/dados.service';
import { validateEventsArray } from '@angular/fire/firestore';
import Swal from 'sweetalert2' 



@Component({
  selector: 'app-cad-equipe',
  templateUrl: './cad-equipe.component.html',
  styleUrls: ['./cad-equipe.component.css']
})
export class CadEquipeComponent implements OnInit {
  public cadEquipe: FormGroup;

  exames: any= [];
  equipamentos: any = [];
  unidades: any = [];
  sexos: any = [];
  laudos: any = [];
  formValid = false;

  @ViewChild('f', { read: true, static: false }) userProfileForm: NgForm;

  model: any = {};

  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @BlockUI('userProfile') blockUIUserProfile: NgBlockUI;

  options = {
    minimize: true,
    reload: false,
    expand: true,
    close: true
  };
  public breadcrumb: any;

  submitted = false;
  loading = false;
  errorMessage = '';
  successMessage = '';
  minuto: any;
  segundos: any;
  milsegundos: any;



  constructor(private formBuilder: FormBuilder,
    public auth: AuthService,
    private alertService: AlertService,
    private datePipe: DatePipe,
    private dadoService: DadosService) { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Cadastro de Exames',
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

  
    this.cadEquipeForm();



    this.exames = [
      'ABDOME AGUDO',
      'ANTEBRACO  DIREITO',
      'ANTEBRACO ESQUERDO',
      'ARCO AORTICO',
      'ART ACROMIOCLAVICULAR DIREITO',
      'ART ESCAPULOUMERAL DIREITO',
      'ART ESCAPULOUMERAL ESQUERDO',
      'ART ESTERNOCLAVICULAR DIREITO',
      'ART TEMPOROMANDIBULAR BILAT',
      'ARTICULACAO ACROMIOCLAVICULAR ESQUERDO',
      'ARTICULACAO ESTERNOCLAVICULAR ESQUERDO',
      'ARTICULACOES SACROILIACAS',
      'ARTROGRAFIA',
      'BACIA',
      'BRACO DIREITO',
      'BRACO ESQUERDO',
      'CALCANEO DIREITO',
      'CALCANEO ESQUERDO',
      'CLAVICULA DIREITA',
      'CLAVICULA ESQUERDA',
      'CLISTER OPACO DUPLO CONTRASTE',
      'COLUNA CERVICAL 3 INCIDENCIAS',
      'COLUNA CERVICAL 5P',
      'COLUNA CERVICAL FUNC/DINAMICA',
      'COLUNA DORSAL 2 INCIDENCIAS',
      'COLUNA DORSOLOMBAR',
      'COLUNA LOMBOSSACRA 3 INCIDENCIAS',
      'COLUNA LOMBOSSACRA 5 INCIDENCIAS',
      'COLUNA LOMBOSSACRA FUNC/DINAMICA',
      'COLUNA PARA ESCOLIOSE DINAMICA',
      'COLUNA PARA ESCOLIOSE PA LATERAL',
      'CONDUTOS AUDITIVOS INTERNOS',
      'CORACAO VASOS BASE PA LAT',
      'CORACAO VASOS BASE PA LAT OBLIQ',
      'COSTELA HEMITORAX DIREITO',
      'COSTELA HEMITORAX ESQUERDO',
      'COTOVELO DIREITO',
      'COTOVELO ESQUERDO',
      'COXA DIREITA',
      'COXA ESQUERDA',
      'CRANIO PA LAT',
      'CRANIO PA LAT BRETTON',
      'CRANIO PA LAT OBL BRETTON HIRTZ',
      'ESCANOMETRIA',
      'ESOFAGO',
      'ESQUELETO CRAN COL BACIA MEMBROS',
      'ESTERNO',
      'ESTOMAGO E DUODENO',
      'ESTOMAGO ESOFAGO HIATO DUO EED',
      'ESTUDO DELGADO DUPLO CONTRA',
      'JOELHO DIREITO AP LAT AXIAL',
      'JOELHO DIREITO AP LAT OBL AXIAIS',
      'JOELHO DIREITO AP LATERAL',
      'JOELHO ESQUERD AP LAT OBL AXIAIS',
      'JOELHO ESQUERDO AP LAT AXIAL',
      'JOELHO ESQUERDO AP LATERAL',
      'LARINGE',
      'MAO DIREITA',
      'MAO ESQUERDA',
      'MAO/DEDO DIREITO',
      'MAO/DEDO ESQUERDO',
      'MASTOIDES',
      'MAXILAR INFERIOR',
      'MEDIASTINO',
      'ORBITAS PA LAT OBL HIRTZ',
      'ORELHA DIREITA',
      'ORELHA ESQUERDA',
      'OSSOS DA FACE',
      'PATELA DINAMICA DIREITA',
      'PATELA DINAMICA ESQUERDA',
      'PE DIREITO',
      'PE ESQUERDO',
      'PERNA DIREITA',
      'PERNA ESQUERDA',
      'PUNHO DIREITO AP LAT',
      'PUNHO ESQUERDO AP LAT',
      'QUADRIL DIREITO',
      'QUADRIL ESQUERDO',
      'SACROCOCCIX',
      'SEIOS FACE 3 POSICOES',
      'SEIOS FACE FN MN LAT HIRTZ',
      'SELA TURCA PA LAT BRETTON TOWNE',
      'TORAX 4P',
      'TORAX AP',
      'TORAX APICO LORDOTICA',
      'TORAX PA LAT OBLIQUAS',
      'TORAX PA PERFIL',
      'TORNOZELO DIREITO',
      'TORNOZELO ESQUERDO',
      'TRANSITO MORFOLOGIA DO DELGADO',

    ]

    this.equipamentos = [
    {id: "CR", label: "Computed Radiography"},
    {id: "CT", label: "Computed Tomography"},
    {id: "MR", label: "Magnetic Resonance"},
    {id: "US", label: "Ultrasound"},
    {id: "OT", label: "Other"},
    {id: "ES", label: "Endoscopy"},
    {id: "PT", label: "Positron emission tomography (PET)"},
    {id: "RG", label: "Radiographic imaging (conventional film/screen)"},
    {id: "XA", label: "X-Ray Angiography"},
    {id: "DX", label: "Digital Radiography"},
    {id: "NM", label: "Nuclear Medicine"},
    {id: "MG", label: "Mammography"}
  ]

  this.unidades = [
    {id: "1", label: "Hospital 1"},
    {id: "2", label: "Hospital 2"},
    {id: "3", label: "Hospital 3 "},
  ]

  this.sexos = [
    {id: "M", label: "Masculino"},
    {id: "F", label: "Feminino"},
    {id: "ND", label: "Não Declarar"},
  ]

  this.laudos = [
    {id: "S", label: "Com Laudos"},
    {id: "N", label: "Sem Laudos"}
  ]



  }

  get f() {
    return this.cadEquipe.controls;
  }

  cadEquipeForm() {
    this.cadEquipe = this.formBuilder.group({
      firstName: ['', Validators.required],
      observacao: [''],
      cpf: ['', Validators.required],
      niver: ['', Validators.required],
      sexo: ['', Validators.required],
      medico: ['', Validators.required],
      tipoexame: ['',Validators.required],
      equipamento: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      min: ['', Validators.required],
      tecnico: ['', Validators.required],
      descricao: ['', Validators.required],
      unidade: ['', Validators.required],
      laudo: ['', Validators.required]

    });
  }

  // Accessing form control using getters
  get firstName() {
    return this.cadEquipe.get('firstName');
  }

  get cpf() {
    return this.cadEquipe.get('cpf');
  }

  get niver() {
    return this.cadEquipe.get('niver');
  }

  get sexo() {
    return this.cadEquipe.get('sexo');
  }

  // Accessing form control using getters
  get medico() {
    return this.cadEquipe.get('medico');
  }

  get equipamento() {
    return this.cadEquipe.get('equipamento');
  }

  // Accessing form control using getters
  get data() {
    return this.cadEquipe.get('data');
  }

  get hora() {
    return this.cadEquipe.get('hora');
  }
  get min() {
    return this.cadEquipe.get('min');
  }

  get tecnico() {
    return this.cadEquipe.get('tecnico');
  }

  get descricao() {
    return this.cadEquipe.get('descricao');
  }

  get unidade() {
    return this.cadEquipe.get('mobileNumber');
  }
  get tipoexame() {
    return this.cadEquipe.get('tipoexame');
  }

  get laudo() {
    return this.cadEquipe.get('laudo');
  }

  resetForm() {
    this.cadEquipe.reset();
  }

  changeTipoexame(e) {
    console.log('eee', e )
    this.tipoexame.setValue(e.target.value, {
      onlySelf: true
    })
  }

  oncadEquipeSubmit(dados: any) {
    console.log(this.formValid)
    dados.status = 'Não Baixado';
    var niver = new Date(this.cadEquipe.value.niver);
    dados.horaConsulta = this.cadEquipe.value.hora +this.cadEquipe.value.min+'00'
    dados.meunr = '1.2.6965.20173498.'+ this.datePipe.transform(this.cadEquipe.value.data,"yyyyMMddHHmmss")+"."+this.cadEquipe.value.unidade+
    this.datePipe.transform(this.cadEquipe.value.data,"sss");
     var anoNiver =niver.getFullYear();
     var mesNiver = niver.getMonth()+1;
     var diaNiver = niver.getDay();
     var idade = this.idade(anoNiver, mesNiver, diaNiver);

    dados.idade = idade

    this.submitted = true;

     if (this.cadEquipe.invalid ) {
       console.log("formulario nao é valido", this.cadEquipe.value)
      return;
    } else {
      
      this.formValid = true

     // console.log("Idade da pessoa ", dados )
        this.dadoService.create(dados).then(() => {
          this.alertService.error('Dados Inseridos', true);
          //  window.location.reload();
          this.submitted = true;
         this.resetForm()
       });

    }
  }

  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }

  cancela(){
    this.cadEquipe.reset()
  }

  reloadUserProfile() {
    this.blockUIUserProfile.start('Loading..');

    setTimeout(() => {
      this.blockUIUserProfile.stop();
    }, 2500);
  }

  idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date;
        var ano_atual = d.getFullYear();
        var mes_atual = d.getMonth() + 1;
        var dia_atual = d.getDate();


        var quantos_anos = ano_atual - ano_aniversario;
        console.log('data que tratamos ', ano_aniversario, mes_aniversario, dia_aniversario);


    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos-1;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}


 /* keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }*/
}
