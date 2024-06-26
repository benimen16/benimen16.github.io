import { Component, Input, OnInit } from '@angular/core';
import { CardBody } from 'src/app/models/cardBody';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: CardBody = new CardBody;

  constructor() { }

  ngOnInit(): void {
  }

}
