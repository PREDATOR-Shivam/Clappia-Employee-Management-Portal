import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})



export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      salary: null as any,
      gender: "",
      team: "",
      address: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);

      });
    }
    else {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);

      });

    }

  }


}
