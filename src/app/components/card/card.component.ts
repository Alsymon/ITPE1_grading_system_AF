import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()name : string = "";
  @Input()position : string = "";
  @Input()company  : string = "";
  @Input()userImage : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
