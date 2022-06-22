import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
 employee:{id:number,name:string,designation:string};
  constructor( private route : ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   this.employee = {
      id:this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name'],
      designation: this.route.snapshot.params['designation']
   }
  }
  
}
