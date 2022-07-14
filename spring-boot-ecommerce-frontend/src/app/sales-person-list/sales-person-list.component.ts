import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-boostrap.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {


  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Sam", "Kumar", "SameKumar@gmail.com", 40000),
    new SalesPerson("Kim", "Kadar", "KimKar@gmail.com", 100000),
    new SalesPerson("Kylie", "Jenner", "KJenner@gmail.com", 60000),
    new SalesPerson("Kendal", "Jenner", "Kendalj@gmail.com", 9000),
  ];

  constructor() { }

  ngOnInit(){
  }

}
