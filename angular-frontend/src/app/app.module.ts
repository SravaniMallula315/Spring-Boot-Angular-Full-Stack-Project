import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import{ FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, 
    EmployeeListComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
  declarations: [

    UpdateEmployeeComponent
  ]
})
export class AppModule { }
