import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
  chineseValidator, mobileUniqueValidator, mobileValidator, passwordValidator,
  passwordValidatorLength
} from '../../../shared/validators/Validators';
import {ValidationService} from '../../../shared/services/validation.service';
import {User, UserServiceService} from "../../../service/user-service.service";
import {Role, RoleService} from "../../../service/role.service";
import {Observable} from "rxjs/Observable";
declare var bootbox:any;

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public formModel: FormGroup;
  public user: User;
  // public confirmDialog;
  public userid: number;
  public roles:Observable<Role[]>;
  constructor(private routeInfo: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              public validation: ValidationService,
              private userService: UserServiceService,
              private roleService: RoleService) {

  }

  ngOnInit() {
    this.roles = this.roleService.getRoles();
    this.userid = this.routeInfo.snapshot.params['id'];
    this.formModel = this.fb.group({
      userName: ['', [Validators.required, chineseValidator]],
      phone: ['', [Validators.required, mobileValidator], mobileUniqueValidator],
      passwordInfo: this.fb.group({
        password: ['', [Validators.required, passwordValidatorLength]],
        passwordConfirm: ['', Validators.required]
      }, {validator: passwordValidator}),
      position: ['', Validators.required],
      gender: ['女'],
      state: ['失效']
    });
    if (this.userid != 0) {
      this.userService.getUser(this.userid).subscribe(
        data => {
          this.user = data;
          this.formModel.reset({
            userName: data.username,
            phone: data.phone,
            passwordInfo: {
              password: data.password,
              passwordConfirm: data.password
            },
            position: data.rolename,
            gender: data.gender,
            state: data.state
          })
        },
        err =>{
          console.log(err);
        }
      );
    }
  }

  cancel() {
    let c = confirm('确定要返回？');
    if(c == true) {
      this.router.navigateByUrl('/home/usermgt');
    }
  }

  createUser() {
    console.log(this.formModel.value);
    console.log(this.formModel.errors);
  }

  save() {
    if (this.formModel.valid) {
      console.log('form submitted');
      if (this.user == null) {
        this.user = new User(null,
          this.formModel.value['userName'],
          this.formModel.controls['passwordInfo'].value['password'],
          this.formModel.value['gender'],
          this.formModel.value['state'],
          this.formModel.value['phone'],
          '',
          0,
          null,
          JSON.parse(localStorage.getItem('currentUser'))['username'],
          '',
          '',
          '',
          this.formModel.value['position'],
        );
        console.log('新建用户：');
        console.log(this.user);
        this.userService.addUser(this.user).subscribe(
          res => {
            console.log(res);
            // 告诉用户创建成功或者失败
            alert('用户创建成功： '+this.user.username);
            this.router.navigateByUrl('/home/usermgt');
          },
          err => {
            console.log(err);
            if(err.message.indexOf('phone_UNIQUE')){
              alert('创建失败，手机号码已存在');
              this.user = null;
            }
          }
        );
      } else {
        // update user
        this.user.username = this.formModel.value['userName'];
        this.user.phone = this.formModel.value['phone'];
        this.user.password = this.formModel.controls['passwordInfo'].value['password'];
        this.user.rolename = this.formModel.value['position'];
        this.user.gender = this.formModel.value['gender'];
        this.user.state = this.formModel.value['state'];
        console.log('更新用户：');
        console.log(this.user);
        this.userService.updateUser(this.user).subscribe(
          res => {
            console.log(res);
            // 告诉用户创建成功或者失败
            alert('用户更新成功： '+this.user.username);
            this.router.navigateByUrl('/home/usermgt');
          },
          err => {
            console.log(err);
            if(err.message.indexOf('phone_UNIQUE')){
              alert('更新失败，手机号码已存在');
              this.user = null;
            }
          }
        );
      }
    } else {
      this.validation.validateAllFormFields(this.formModel);
    }
  }

  fileuploaderFileChange(files: FileList) {

  }

}
