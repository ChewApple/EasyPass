import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Customer, CustomerService} from "../../../service/customer.service";
import {Observable} from "rxjs/Observable";
import {DateService} from "../../../shared/services/date.service";
import {FormBuilder, FormGroup} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-cusmgt',
  templateUrl: './cusmgt.component.html',
  styleUrls: ['./cusmgt.component.css']
})
export class CusmgtComponent implements OnInit {

  public customers: Observable<Customer[]>;
  public formGroup: FormGroup;

  constructor(private router: Router,
              private cusService: CustomerService,
              public date: DateService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
        cusname: [''],
        cusmode: [''],
        contact: [''],
        contactPhone: [''],
        province: [''],
        city: [''],
        area: ['']
      }
    )
    $('#cusmgtTable').DataTable({
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

  edit(cus: Customer) {
    this.router.navigateByUrl('/home/cusform/' + cus.cusid);
  }

  create() {
    this.router.navigateByUrl('/home/cusform/0');
  }

  search(form: any) {
    this.customers = this.cusService.getCustomers(form);
  }
}
