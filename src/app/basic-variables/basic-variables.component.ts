import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-variables',
  templateUrl: './basic-variables.component.html',
  styleUrls: ['./basic-variables.component.css']
})
export class BasicVariablesComponent implements OnInit {

  sNo: number = 12;
  //private firstName: string = "Satheesh";
  //protected firstName: string = "Satheesh";
  firstName: string = "Satheesh";
  isAdded: boolean = false;
  price: number | string = "100";
  sample: any = 15;
  students: string[] = ["Satheesh", "Suryan"];
  
  studentObj: any = {
    id: 40,
    firstName: "Satheesh",
    email: "satheesh@gmail.com",
    gender: "Male"
  }

nestedStudentObj:any={
  sirName:"CK",
  address:{
    city:"Calicut",
    state:"Kerala",
    country:"India"
  },
  technicalSkills:["Java","Angular"]
}  
  constructor() { }

  ngOnInit(): void {
  }

}
