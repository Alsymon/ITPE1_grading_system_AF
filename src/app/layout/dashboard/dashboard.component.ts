import { Component, OnInit } from '@angular/core';
import { card_data, subject, subject2, } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  buttonText: string = "I'm inside typescript";
   cardData = card_data;
    Subject = subject;
    Subject2 = subject2;
  constructor() { }

  ngOnInit(): void {
   //console.log ("This is card data", this.cardData)
  }

}
