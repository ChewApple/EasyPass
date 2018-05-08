import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {User, UserServiceService} from "../../../service/user-service.service";
import {DateService} from "../../../shared/services/date.service";
import {Role, RoleService} from "../../../service/role.service";

declare var $: any;

@Component({
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {

  public formGroup: FormGroup;
  public users: Observable<User[]>;
  public roles: Observable<Role[]>;

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserServiceService,
              public date: DateService,
              private roleService: RoleService
  ) {
    this.formGroup = fb.group({
      username: [''],
      phone: [''],
      role: [''],
      state: ['']
    })
  }

  ngOnInit() {
    this.roles = this.roleService.getRoles();
    $('#usermgtTable').DataTable({
      'paging': true,
      'lengthChange': false,
      'searching': false,
      'ordering': true,
      'info': true,
      'autoWidth': false,
      'oLanguage': { //国际化配置
        'sProcessing': '正在获取数据，请稍后...',
        'sLengthMenu': '显示 _MENU_ 条',
        'sZeroRecords': '没有您要搜索的内容',
        'sInfo': '从 _START_ 到  _END_ 条记录 总记录数为 _TOTAL_ 条',
        'sInfoEmpty': '记录数为0',
        'sInfoFiltered': '(全部记录数 _MAX_ 条)',
        'sInfoPostFix': '',
        'sSearch': '搜索',
        'sUrl': '',
        'oPaginate': {
          'sFirst': '第一页',
          'sPrevious': '上一页',
          'sNext': '下一页',
          'sLast': '最后一页'
        }
      }
    });

  }

  create() {
    this.router.navigateByUrl('/home/userform/0');
  }

  search(value:any){
    this.users = this.userService.getUsers(value);
  }

  edit(user:User){
    console.log(user.userid);
    this.router.navigateByUrl('/home/userform/'+user.userid);
  }
}
