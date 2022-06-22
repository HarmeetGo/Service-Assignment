import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  employee:{id:number,name:string,designation:string};
  // public chngDes='';
  // public chngName='' ;
  constructor(private route : ActivatedRoute,private router : Router, private dataService : DataService) { }

  ngOnInit(): void {
    this.employee={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
      designation:this.route.snapshot.params['designation']
    }
  }
  onSave(id:number,name:string,designation:string){
    this.dataService.saveEmploye({index:id,Name:name,Des:designation});
    this.router.navigate(['/details']);
  }
}
