import { Component, OnInit } from '@angular/core';
import { iStudent } from './shared/models/stdInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  studentArray : Array<iStudent> = [] 

  onDAtaRecive(e : iStudent[]){
  this.studentArray = e
  console.log(e)
}









ngOnInit(): void {
 console.log(this.studentArray) 
}









}
