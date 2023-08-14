// import { Component, OnInit } from '@angular/core';
// import { iStudent } from '../../models/stdInterface';
// import { EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class FormComponent implements OnInit {

//   @Output() getData : EventEmitter<iStudent> = new EventEmitter<iStudent>()


//   fnameVal !: string;
//   lNameVal !: string
//   emailVal !: string
//   contactVal !: string

//   studentArray : Array<iStudent> = []

//   constructor() { }

//   ngOnInit(): void {
  
  
//   }



//   onStudAdd(){
//     console.log(this.fnameVal)
//     let obj : iStudent  = {
//       fname:this.fnameVal,
//       lname: this.lNameVal,
//       email:this.emailVal,
//       contact : +this.contactVal
//     }

//    this.studentArray.push(obj)

//     console.log(this.studentArray);

//     this.fnameVal=''
//     this.lNameVal=''
//     this.emailVal=''
//     this.contactVal=''


//     this.getData.emit(this.obj);


    
    
    
//   }
  



// }
import { Component, OnInit } from '@angular/core';
import { iStudent } from '../../models/stdInterface';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() getData: EventEmitter<iStudent[]> = new EventEmitter<iStudent[]>()

  fnameVal!: string;
  lNameVal!: string;
  emailVal!: string;
  contactVal!: string;

  studentArray: Array<iStudent> = [];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }
  
  onStudAdd() {
    this.getData.emit(this.studentArray);
    let obj: iStudent = {
      fname: this.fnameVal,
      lname: this.lNameVal,
      email: this.emailVal,
      contact: +this.contactVal
    };

    this.studentArray.push(obj);

    this.fnameVal = '';
    this.lNameVal = '';
    this.emailVal = '';
    this.contactVal = '';


    console.log(this.studentArray)
  }
}
