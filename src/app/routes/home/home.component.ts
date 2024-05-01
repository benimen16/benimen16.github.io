import { Component, OnInit } from '@angular/core';
import { CardBody } from 'src/app/models/cardBody';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aboutMeCard: CardBody = {
    name: 'Test'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
