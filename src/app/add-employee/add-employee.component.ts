import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private dataService : DataService , private router: Router) { }
  
  ngOnInit(): void {
  }
  onEmployeeAcc(empName, empDes){
    this.dataService.addEmployee({name:empName,designation:empDes});
    this.router.navigate(['details']);
  }

  
}
