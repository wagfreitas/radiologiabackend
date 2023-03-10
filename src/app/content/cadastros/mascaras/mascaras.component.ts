import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  NgForm,
  FormControl,
} from "@angular/forms";
import Swal from "sweetalert2";
import { MatDialog } from "@angular/material";
import { DialogMascarasComponent } from "src/app/dialogs/dialog-mascaras/dialog-mascaras.component";
import { CirurgiasService } from "src/app/_services/cirurgias.service";

@Component({
  selector: "app-mascaras",
  templateUrl: "./mascaras.component.html",
  styleUrls: ["./mascaras.component.css"],
})
export class MascarasComponent implements OnInit {


  submitted = false;
  maskForm: FormGroup;
  examesposicao: FormArray;
  examesnormais: FormArray;
  laudossiglas: FormArray;
  laudosdesc: FormArray;
  dados = [];
  final = {};
  update = false;
  todasMascaras: any[];

  @ViewChild("f", { read: true, static: false }) userProfileForm: NgForm;

  constructor(
    private fb: FormBuilder,
    private exameService: CirurgiasService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cadMaskForm();

  }

  get f() {
    return this.maskForm.controls;
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogMascarasComponent)
  }


  cadMaskForm() {
    this.maskForm = this.fb.group({
      mascara: ["", Validators.required],
      examesposicao: this.fb.array([this.initExamesFields()]),
      examesnormais: this.fb.array([this.initExamesNormaisFields()]),
      laudossiglas: this.fb.array([this.initLaudosFields()]),
      laudosdesc: this.fb.array([this.initLaudosDescFields()]),
    });
  }

  pesquisaMascara(nomeMascara) {
    this.update = true;
    this.exameService.getByName(nomeMascara.mascara).subscribe((res) => {
      if (res) {
        this.editExames(res);
        this.editExamesNormais(res);
        this.editLaudos(res);
        this.editLaudosDesc(res);
      } else {
        Swal.fire({
          title: "Mascara não encontrada",
        });
        this.update = false;
      }
    });
  }

  initExamesFields(): FormGroup {
    return this.fb.group({
      exames: [""],
      btncolor: ["primary"],
    });
  }

  initExamesNormaisFields(): FormGroup {
    return this.fb.group({
      laudosnormais: [""],
      btncolor: ["primary"],
    });
  }

  initLaudosFields(): FormGroup {
    return this.fb.group({
      laudos: [""],
      descricao: [""],
      btncolor: ["primary"],
    });
  }

  initLaudosDescFields(): FormGroup {
    return this.fb.group({
      laudosmin: [""],
      btncolor: ["primary"],
    });
  }

  addExames(): void {
    this.examesposicao = this.maskForm.get("examesposicao") as FormArray;
    this.examesposicao.push(this.initExamesFields());
  }

  editExames(res): void {
    console.log(res);
    this.examesposicao = this.maskForm.get("examesposicao") as FormArray;
    this.examesposicao.clear();
    res.exames.forEach((posicao) =>
      this.examesposicao.push(
        new FormGroup({
          exames: new FormControl(posicao.exames),
          btncolor: new FormControl(posicao.btncolor),
        })
      )
    );
  }

  removeExames(i: number): void {
    this.examesposicao = this.maskForm.get("examesposicao") as FormArray;
    this.examesposicao.removeAt(i);
  }

  addExamesNormais(): void {
    this.examesnormais = this.maskForm.get("examesnormais") as FormArray;
    this.examesnormais.push(this.initExamesNormaisFields());
  }

  editExamesNormais(res): void {
    this.examesnormais = this.maskForm.get("examesnormais") as FormArray;
    this.examesnormais.clear();
    res.examesnormais.forEach((normais) =>
      this.examesnormais.push(
        new FormGroup({
          laudosnormais: new FormControl(normais.laudosnormais),
          btncolor: new FormControl("primary"),
        })
      )
    );
  }

  removeExamesNormais(i: number): void {
    this.examesnormais = this.maskForm.get("examesnormais") as FormArray;
    this.examesnormais.removeAt(i);
  }

  addLaudos(): void {
    this.laudossiglas = this.maskForm.get("laudossiglas") as FormArray;
    this.laudossiglas.push(this.initLaudosFields());
  }

  editLaudos(res): void {
    this.laudossiglas = this.maskForm.get("laudossiglas") as FormArray;
    this.laudossiglas.clear();
    res.laudos.forEach((siglas) =>
      this.laudossiglas.push(
        new FormGroup({
          laudos: new FormControl(siglas.laudos),
          descricao: new FormControl(siglas.descricao),
          btncolor: new FormControl(siglas.btncolor),
        })
      )
    );
  }

  removeLaudos(i: number): void {
    this.laudossiglas = this.maskForm.get("laudossiglas") as FormArray;
    this.laudossiglas.removeAt(i);
  }

  addLaudosDesc(): void {
    this.laudosdesc = this.maskForm.get("laudosdesc") as FormArray;
    this.laudosdesc.push(this.initLaudosDescFields());
  }

  editLaudosDesc(res): void {
    this.laudosdesc = this.maskForm.get("laudosdesc") as FormArray;
    this.laudosdesc.clear();
    res.laudosmin.forEach((descricao) =>
      this.laudosdesc.push(
        new FormGroup({
          laudosmin: new FormControl(descricao.laudosmin),
          btncolor: new FormControl(descricao.btincolor),
        })
      )
    );
  }

  removeLaudosDesc(i: number): void {
    this.laudosdesc = this.maskForm.get("laudosdesc") as FormArray;
    this.laudosdesc.removeAt(i);
  }

  manage(val: any): void {
    const laudosnorm = {
      btncolor: "primary",
      descricao: "NORMAL",
    };

    this.submitted = true;

    if (!this.maskForm.valid) {
      return;
    } else {
      this.final = {
        mascara: val.mascara,
        exames: val.examesposicao,
        examesnormais: val.examesnormais,
        laudosnorm: laudosnorm,
        laudos: val.laudossiglas,
        laudosmin: val.laudosdesc,
      };

      this.exameService.createMascara(val.mascara, this.final).then((res) => {
        console.log("retorno", res);
        this.clearForm();
      });

      this.clearForm();

      Swal.fire({
        title: "Máscara Cadastrada com Sucesso",
      });

      this.maskForm.reset();
    }
  }

  atualizaMascara(val: any) {
    const laudosnorm = {
      btncolor: "primary",
      descricao: "NORMAL",
    };

    this.submitted = true;

    if (!this.maskForm.valid) {
      return;
    } else {
      this.final = {
        mascara: val.mascara,
        exames: val.examesposicao,
        examesnormais: val.examesnormais,
        laudosnorm: laudosnorm,
        laudos: val.laudossiglas,
        laudosmin: val.laudosdesc,
      };
    }

    this.exameService.editMascara(val.mascara, this.final).then((res) => {
      console.log("retorno", res);
      this.clearForm();
    });

    Swal.fire({
      title: "Máscara Atualizada com Sucesso",
    });

    this.maskForm.reset();
    this.update = false;
  }

  deletaMascara(val) {
    const doc = val.mascara;

    this.exameService.deleteMascara(doc).then((res) => {
      console.log(res);
      this.clearForm();
    });

    Swal.fire({
      title: "Máscara Excluida  com Sucesso",
    });

    this.maskForm.reset();
    this.update = false;
  }

  clearForm() {
    this.examesposicao.clear();
    this.examesnormais.clear();
    this.laudossiglas.clear();
    this.laudosdesc.clear();
  }
}
