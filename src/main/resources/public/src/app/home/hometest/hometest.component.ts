import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hometest',
  templateUrl: './hometest.component.html',
  styleUrls: ['./hometest.component.css']
})
export class HometestComponent implements OnInit {

  @Input()
  public searchKeyword: string;

  constructor() {
  }

  ngOnInit() {
  }

  createUser(formInfo: any, valid:any) {
    console.log(valid);
    console.log(formInfo);
  }
}

export class StockInfo {
  constructor(public name: string,
              public price: number) {
  }
}
