import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';



@NgModule({
    declarations: [
        CreateEmployeeComponent,
        EditEmployeeComponent,
        DeleteEmployeeComponent
    ],
    imports: [],
    providers: [],
    exports: [
        CreateEmployeeComponent,
        EditEmployeeComponent,
        DeleteEmployeeComponent
    ]
})

export class TableModule { }