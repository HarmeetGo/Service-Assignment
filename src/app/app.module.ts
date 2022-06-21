import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { DataService } from './service/data.service';

import { EmployeeInfoComponent } from './employee-info/employee-info.component';

const appRoutes : Routes = [

  {
    path : 'new' ,component : AddEmployeeComponent
  },
  {
    path : 'details' ,component : EmployeeDetailsComponent
  },
  {
    path : 'companyInfo' ,component : CompanyInfoComponent
  },
  {
    path: 'employeeInfo' ,component: EmployeeInfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    CompanyInfoComponent,
   
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
