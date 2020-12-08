import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "EmployeeList",
  template: `
    <h2>Employee list</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.first_name }}</li>
    </ul>
  `,
  providers: [EmployeeService],
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployeesResponse().subscribe((res) => {
      this.employees = res;
    });
  }
}
