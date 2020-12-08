import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "EmployeeDetail",
  template: `
    <h2>Employee list</h2>
    <ul *ngFor="let employee of employees">
      <ol>
        <li>Name: {{ employee.fullName }}</li>
        <li>Email: {{ employee.email }}</li>
        <li>Id: {{ employee.id }}</li>
      </ol>
    </ul>
  `,
  providers: [EmployeeService],
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployeesResponse().subscribe((res) => {
      this.employees = res;
    });
  }
}
