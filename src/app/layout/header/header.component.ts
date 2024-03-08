import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MenuComponent} from "../../dialogs/menu/menu.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openMenu() {
    const dialogRef = this.dialog.open(MenuComponent, {
      width: '350px',
      height: '100%',
      position: {
        right: '0px',
        top: '0px'
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe((result) => {

    })
  }
}
