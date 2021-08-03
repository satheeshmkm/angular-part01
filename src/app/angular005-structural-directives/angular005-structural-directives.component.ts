import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular005-structural-directives',
  templateUrl: './angular005-structural-directives.component.html',
  styleUrls: ['./angular005-structural-directives.component.css']
})
export class Angular005StructuralDirectivesComponent implements OnInit {
  isAdded: boolean = false;
  successMessage: string = "Student added successfully";
  isVisible: boolean = true;
  //myName: string = "prabhas";
  //myName: string = "Suryan";
  myName = 12;
  students: any = [
    {
      "id": 10,
      "name": "Satheesh",
      "email": "satheeshmkm@gmail.com",
      "gender": "Male"
    },
    {
      "id": 11,
      "name": "Divya",
      "email": "divyasompali@gmail.com",
      "gender": "Female"
    },
    {
      "id": 12,
      "name": "Deepak",
      "email": "deepak@gmail.com",
      "gender": "male"
    }
  ];

  changeVisible() {
    this.isVisible = !this.isVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
