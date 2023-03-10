import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { CirurgiasService } from "src/app/_services/cirurgias.service";

@Component({
  selector: "app-dialog-mascaras",
  templateUrl: "./dialog-mascaras.component.html",
  styleUrls: ["./dialog-mascaras.component.css"],
})
export class DialogMascarasComponent implements OnInit {
  displayedColumns: string[] = ["id", "action"];
  dataSource: any[];
  pageSize = 10

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private examesCirurgia: CirurgiasService) {}

  ngOnInit(): void {
    this.examesCirurgia.getAll().subscribe((data) => {
      console.log(data)
      this.dataSource = data;
    });
  }

  onPageChange(event){
    this.pageSize = event.pageSize
  }

  deleteMascara(element){
    this.examesCirurgia.deleteMascara(element.id)
  }
}
