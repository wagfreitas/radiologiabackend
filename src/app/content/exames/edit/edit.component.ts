import { Component, OnInit } from '@angular/core';
import { CirurgiasService } from '../../../_services/cirurgias.service';
import { CirurgiasDataService } from '../../../_services/cirurgias-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
cirurgia: any;
key: string = '';

  constructor(
    private cirurgiaService: CirurgiasService,
    private  CirurgiasDataService: CirurgiasDataService) { }

  ngOnInit() {
    this.CirurgiasDataService.currentCirugia.subscribe(data => {
console.log(data)
      if (data.cirurgia && data.key) {

        this.cirurgia.medico = data.cirurgia.medico;
        this.cirurgia.paciente = data.cirurgia.paciente 
      }
    })
  }

}
