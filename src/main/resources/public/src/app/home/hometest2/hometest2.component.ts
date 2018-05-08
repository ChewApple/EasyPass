import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hometest2',
  templateUrl: './hometest2.component.html',
  styleUrls: ['./hometest2.component.css']
})
export class Hometest2Component implements OnInit {

  private formModel: FormGroup;

  private fb: FormBuilder = new FormBuilder();

  constructor() {
    this.formModel = this.fb.group({
      nickName: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [''],
      emails: this.fb.array([
        ['']
      ]),
      passwordInfo: this.fb.group({
        pwd: [''],
        pwdConfirm: ['']
      })
    });
  }

  // constructor() {
  //   this.formModel = new FormGroup({
  //     nickName: new FormControl(),
  //     mobile: new FormControl(),
  //     emails: new FormArray([
  //       new FormControl('a@a'),
  //       new FormControl('b@b'),
  //       new FormControl('c@c')
  //     ]),
  //     passwordInfo: new FormGroup({
  //       pwd: new FormControl(),
  //       pwdConfirm: new FormControl()
  //     })
  //   });
  // }

  ngOnInit() {
  }

  createUser() {
    let nickNameValid = this.formModel.get('nickName').valid;
    let nickNameError = this.formModel.get('nickName').errors;
    console.log('nickName是否校验通过:' + nickNameValid + '错误信息： ' + nickNameError);
    console.log(this.formModel.value);
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }
}
