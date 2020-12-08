export class Employee {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  Employee(fields?) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  get fullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}
