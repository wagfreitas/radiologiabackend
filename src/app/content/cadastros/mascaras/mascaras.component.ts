import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm, FormControl } from '@angular/forms';
import { CirurgiasService } from 'src/app/_services/cirurgias.service';


@Component({
  selector: 'app-mascaras',
  templateUrl: './mascaras.component.html',
  styleUrls: ['./mascaras.component.css']
})
export class MascarasComponent implements OnInit {
  submitted = false;
  maskForm: FormGroup;
  examesposicao: FormArray;
  examesnormais: FormArray;
  laudossiglas: FormArray;
  laudosdesc: FormArray;
  dados = []
  final = {};


  @ViewChild('f', { read: true, static: false }) userProfileForm: NgForm;


  constructor(private fb: FormBuilder, private exameService: CirurgiasService) { }

  ngOnInit(): void {
   
      this.cadMaskForm();
      this.examesposicao = this.maskForm.get('examesposicao') as FormArray;

     const exames = [{
        exames: 'ESQUERDO', 
        btncolor: 'primary'
        }, 
        {
          exames: 'DIREITO', 
          btncolor: 'primary'
      },
      {
        exames: 'FRONTAL', 
        btncolor: 'primary'
    }]

     exames.forEach((dados) => {
       const cont = 0
       const res = []
       res.push(dados)
       this.dados = res
       console.log(dados)
     
     })

    //this.examesposicao.push({this.dados})
     
    console.log(this.examesposicao)
  }

  get f() {
    return this.maskForm.controls;
  }

  cadMaskForm(){
    this.maskForm = this.fb.group({
      mascara: ['', Validators.required], 
      examesposicao: this.fb.array([
        this.initExamesFields()
      ]), 
      examesnormais: this.fb.array([
        this.initExamesNormaisFields()
      ]),
      laudossiglas: this.fb.array([
        this.initLaudosFields()
      ]), 
      laudosdesc: this.fb.array([
         this.initLaudosDescFields() 
      ])

    })
  }

  editMascara(){
    const exames = [
      {
        exames: 'DIREITO', 
        btncolor: 'primary'
    },
    {
      exames: 'ESQUERDO',
      btncolor: 'primary'
    } 
  
  ]

  exames.forEach((dados)  =>{
    console.log(dados)
  })
    this.examesposicao.patchValue(exames)

    
  }

  initExamesFields(): FormGroup {
    return this.fb.group({
      exames: ['', Validators.required],
      btncolor: ['primary']
    });
  }

  addExames(): void {
    this.examesposicao = this.maskForm.get('examesposicao') as FormArray;
    this.examesposicao.push(this.initExamesFields());
  }

  removeExames(i: number): void {
    this.examesposicao = this.maskForm.get('examesposicao') as FormArray;
    this.examesposicao.removeAt(i);
  }

  removeExamesNormais(i: number): void {
    this.examesnormais = this.maskForm.get('examesnormais') as FormArray;
    this.examesnormais.removeAt(i);
  }

  addExamesNormais(): void {
    this.examesnormais = this.maskForm.get('examesnormais') as FormArray;
    this.examesnormais.push(this.initExamesNormaisFields());
  }
  
  initExamesNormaisFields(): FormGroup {
    return this.fb.group({
      laudosnormais: ['', Validators.required],
      btncolor: ['primary']
    });
  }



  initLaudosFields(): FormGroup{
    return this.fb.group({
      laudos: ['', Validators.required], 
      descricao: ['', Validators.required], 
      btncolor: ['primary']
    });
  }

  addLaudos(): void {
    this.laudossiglas = this.maskForm.get('laudossiglas') as FormArray;
    this.laudossiglas.push(this.initLaudosFields());
  }

  removeLaudos(i: number): void {
    this.laudossiglas = this.maskForm.get('laudossiglas') as FormArray;
    this.laudossiglas.removeAt(i);
  }



  initLaudosDescFields(): FormGroup {
    return this.fb.group({
      laudosmin: [''], 
      btncolor: ['primary']
    })
  }

  addLaudosDesc(): void {
    this.laudosdesc = this.maskForm.get('laudosdesc') as FormArray;
    this.laudosdesc.push(this.initLaudosDescFields());
  }

  removeLaudosDesc(i: number): void {
    this.laudosdesc = this.maskForm.get('laudosdesc') as FormArray;
    this.laudosdesc.removeAt(i);
  }


  manage(val: any): void {
    const laudosnorm = {
      btncolor: 'primary', 
      descricao: 'NORMAL' 
    }

    this.submitted = true;
    
     if(!this.maskForm.valid) {
       return
     } else {
    this.final = {
     mascara: val.mascara,
     exames: val.examesposicao,
     examesnormais: val.examesnormais, 
     laudosnorm: laudosnorm,
     laudos: val.laudossiglas,
     laudosmin: val.laudosdesc

   };

     this.exameService.createMascara(val.mascara, this.final).then(res => {
          this.maskForm.reset();
     });

     this.examesposicao.clear();
     this.examesnormais.clear();
     this.laudossiglas.clear();
     this.laudosdesc.clear()




  }
  }



}
