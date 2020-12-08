import { Employee } from "./employee";

export class EmployeeResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Employee[];

  contructor(fields?) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
