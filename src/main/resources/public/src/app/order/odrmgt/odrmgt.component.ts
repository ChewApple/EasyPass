import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var $ : any;
@Component({
  selector: 'app-odrmgt',
  templateUrl: './odrmgt.component.html',
  styleUrls: ['./odrmgt.component.css']
})
export class OdrmgtComponent implements OnInit {

  private orders: Array<Order>;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.orders = [
      new Order(1, '福特福克斯', 300000, '第1辆车', ['涡轮', '1.6', '白色']),
      new Order(2, '捷豹', 400000, '第2辆车', ['涡轮', '1.7', '白色']),
      new Order(3, '奔驰', 500000, '第3辆车', ['涡轮', '1.8', '蓝色']),
      new Order(4, '路虎', 600000, '第4辆车', ['涡轮', '1.9', '白色']),
      new Order(5, '别克', 700000, '第5辆车', ['涡轮', '1.11', '白色']),
      new Order(6, '马自达', 800000, '第6辆车', ['涡轮', '1.22', '白色']),
      new Order(7, '日产', 900000, '第7辆车', ['涡轮', '1.2', '黑色']),
      new Order(8, '本田', 100000, '第8辆车', ['涡轮', '1.0', '棕色']),
      new Order(9, '东风', 200000, '第9辆车', ['涡轮', '1.1', '白色'])
    ];

    $('#odrmgt_form_dp').daterangepicker({
      "locale": {
        format: 'YYYY-MM-DD',
        separator: ' ~ ',
        applyLabel: "应用",
        cancelLabel: "取消",
        resetLabel: "重置",
      }
    });
    $('#odrmgt_form_dp2').daterangepicker({
      "locale": {
        format: 'YYYY-MM-DD',
        separator: ' ~ ',
        applyLabel: "应用",
        cancelLabel: "取消",
        resetLabel: "重置",
      }
    });
    $('#odrmgt_form_dp3').daterangepicker({
      "locale": {
        format: 'YYYY-MM-DD',
        separator: ' ~ ',
        applyLabel: "应用",
        cancelLabel: "取消",
        resetLabel: "重置",
      }
    });
  }
  create(){
    this.router.navigateByUrl('/home/orderform/0');
  }
}

export class Order {
  constructor(public id: number,
              public name: string,
              public price: number,
              public desc: string,
              public type: Array<string>) {

  }
}
