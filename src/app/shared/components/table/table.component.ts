import { Component, Input, OnInit  } from '@angular/core';
import { iStudent } from '../../models/stdInterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  tranferDAta!: Array<iStudent>;
  
  studentArray : Array<iStudent> = this.tranferDAta
  
  
  
  constructor() { }
  
  ngOnInit(): void {
    
    console.log(this.tranferDAta[0]);
  }

}
