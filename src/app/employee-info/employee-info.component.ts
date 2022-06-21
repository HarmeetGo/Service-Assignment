import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
 employees:{name,designation}[]=[];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
 this.employees=this.dataService.Employees;
  }

}
