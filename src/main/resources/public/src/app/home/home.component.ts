///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // used to present form elements, to monitor the changes in this form
  // searchInput: FormControl = new FormControl();
  search: string;

  constructor() {
    // Observable.from([1, 2, 3, 4])
    //   .filter(e => e % 2 == 0)
    //   .map(e => e * e)
    //   .subscribe(
    //     e => console.log(e),
    //     err => console.error(err),
    //     () => console.log('结束了')
    //   );
    // this.searchInput.valueChanges
    //   .debounceTime(500)
    //   .subscribe( stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }

  // getStockInfo(code: string) {
  //   console.log(code);
  // }
}
