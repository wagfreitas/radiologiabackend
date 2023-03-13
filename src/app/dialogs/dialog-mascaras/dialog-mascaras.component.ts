import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { CirurgiasService } from "src/app/_services/cirurgias.service";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-dialog-mascaras",
  templateUrl: "./dialog-mascaras.component.html",
  styleUrls: ["./dialog-mascaras.component.css"],
})
export class DialogMascarasComponent implements OnInit {
  displayedColumns: string[] = ["id", "action"];
  dataSource =  new MatTableDataSource([]);
  pageSize = 10

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private examesCirurgia: CirurgiasService) {}

  ngOnInit(): void {
    this.examesCirurgia.getAll().subscribe((data) => {
      this.dataSource =  new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

   
  }

  onPageChange(event){
    this.pageSize = event.pageSize
  }

  deleteMascara(element){
    this.examesCirurgia.deleteMascara(element.id)
  }
}
