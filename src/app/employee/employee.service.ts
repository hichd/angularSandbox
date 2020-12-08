import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EmployeeResponse } from "./employee-response";
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployeesResponse(): Observable<Employee[]> {
    return this.http
      .get<EmployeeResponse>("https://reqres.in/api/users?page=2")
      .pipe(map((y) => y.data));
  }
}
