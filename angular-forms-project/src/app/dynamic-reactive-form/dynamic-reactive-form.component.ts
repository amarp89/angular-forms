import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.less']
})
export class DynamicReactiveFormComponent implements OnInit {

  constructor(public fb: FormBuilder) {
  }

  // Using FormGroup and FormControl
  /*public person = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(),
      state: new FormControl()
    })
  });*/

  // Using FormBuilder
  public person = this.fb.group({
    name: [],
    lastName: [],
    email:[],
    alternateEmail: this.fb.array([]),
    address: this.fb.group({
      city: [],
      pincode: [],
      state: []
    })
  });

  ngOnInit() {

  }
  public get alternateEmail() {
    return this.person.get('alternateEmail') as FormArray;
  }

  public _addAlternateEmail() {
    this.alternateEmail.push(this.fb.control(''));
  }
  public _submitPersonForm() {
    console.log(this.person.value);
  }



}
