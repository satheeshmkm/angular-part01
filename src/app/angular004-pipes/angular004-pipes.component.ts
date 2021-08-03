import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular004-pipes',
  templateUrl: './angular004-pipes.component.html',
  styleUrls: ['./angular004-pipes.component.css']
})
export class Angular004PipesComponent implements OnInit {

  name:string="Satheesh";
  houseName:string="CHERUVATTAM KUZHIYIL";
  message:string="This is my first angular class"
  dateObj= new Date();
  total:number=6.28;
  totalNew:number=6.276848234;
  price:number=100;
  constructor() { }

  ngOnInit(): void {
  }

}
