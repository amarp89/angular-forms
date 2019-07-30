import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() {
  }

  // employee details form variables
  public empName: string;
  public empLastName: string;
  public empAge: number;


  ngOnInit() {
  }

  onSubmit(employeeForm) {
    console.log(employeeForm.value);
  }
}
