import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuOptions = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Professional', route: '/professional' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ]

  constructor(
    public dialogRef: MatDialogRef<MenuComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
