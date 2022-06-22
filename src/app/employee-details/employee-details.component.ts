import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  employees:{name:string,designation:string}[]=[];
  constructor(private dataService : DataService , private route : Router, private route2 : ActivatedRoute){}
  ngOnInit(){
   this.employees=this.dataService.Employees;
  }
 onReload(){
  this.route.navigate(['/details'] , {relativeTo : this.route2}); 
 }
 
}
