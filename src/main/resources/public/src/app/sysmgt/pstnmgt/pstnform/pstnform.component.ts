import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Auth, Role, RoleService} from "../../../service/role.service";
import {ValidationService} from "../../../shared/services/validation.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-pstnform',
  templateUrl: './pstnform.component.html',
  styleUrls: ['./pstnform.component.css']
})
export class PstnformComponent implements OnInit {

  public roleid: number;
  public role: Role;
  public formGroup: FormGroup;
  // public auths = [
  //   { name: '权限1-1', selected: false, id: 1 },
  //   { name: '权限1-2', selected: false, id: 2 },
  //   { name: '权限1-3', selected: false, id: 3 },
  //   { name: '权限1-4', selected: false, id: 4 }
  //   ];
  // public auths: Observable<Auth[]>;
  public current_auths: Auth[];

  public selects: string[] = [];

  constructor(private router: Router,
              private routeInfo: ActivatedRoute,
              private fb: FormBuilder,
              private roleService: RoleService,
              public validation: ValidationService) {

  }

  initAuths(): FormArray {
    return this.fb.array(
      this.current_auths.map(auth => {
        return this.fb.control(false);
      })
    );
  }


  ngOnInit() {
    this.roleid = this.routeInfo.snapshot.params['id'];
    this.roleService.findAllAuth().subscribe(res => {
      this.current_auths = res;
      this.formGroup.setControl('authlist', this.initAuths());
      // console.log(this.formGroup.get('authlist'));
      this.formGroup.get('authlist').valueChanges.subscribe(values => {
        let selects: string[] = [];
        values.forEach((selected: boolean, i: number) => {
          selected === true && selects.push(this.current_auths[i].authid + '')
        });
        this.selects = selects;
      });
      if (this.roleid != 0) {
        this.roleService.getRole(this.roleid).subscribe(
          data => {
            this.role = data;
            // this.formGroup.reset({
            //   rolename: data.rolename,
            //   authlist: data.authlist
            // })
            this.formGroup.get('rolename').setValue(data.rolename);
            this.selects = []
            data.authlist.split(',').map(num => {
              let formArray: FormArray;
              formArray = this.formGroup.get('authlist') as FormArray;
              // this.formGroup.get('authlist').at(num - 1).setValue(true);
              formArray.at(num-1).setValue(true);
            });
          }
        );
      }
    });
    this.formGroup = this.fb.group({
      rolename: ['', Validators.required],
      authlist: this.fb.array([])
    });


  }

  cancel() {
    this.router.navigateByUrl('/home/pstnmgt');
  }

  save() {
    // console.log(this.formGroup.get('authlist').value);
    if (this.formGroup.valid) {
      //新建
      if (this.role == null) {
        this.role = new Role(
          null,
          this.formGroup.value['rolename'],
          this.selects.toString(),
          null,
          JSON.parse(localStorage.getItem('currentUser'))['username'],
          null,
          null,
          null
        )
        this.roleService.addRole(this.role).subscribe(
          res => {
            // 告诉岗位创建成功或者失败
            alert('岗位创建成功： ' + this.role.rolename);
            this.router.navigateByUrl('/home/pstnmgt');
          },
          err => {
            alert('创建失败: ' + err.message)
            this.role = null;
          }
        )
      } else {
        this.role.rolename = this.formGroup.value['rolename'];
        this.role.authlist = this.selects.toString();
        // console.log(this.selects.toString());
        console.log('更新岗位: ');
        console.log(this.role);
        this.roleService.updateRole(this.role).subscribe(
          res => {
            alert('用户更新成功： ' + this.role.rolename);
            this.router.navigateByUrl('/home/pstnmgt');
          },
          err => {
            alert('岗位更新失败：' + err.message);
            ;
          });
      }
    } else {
      this.validation.validateAllFormFields(this.formGroup);
    }

  }
}
