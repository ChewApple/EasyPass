import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-carmgt',
  templateUrl: './carmgt.component.html',
  styleUrls: ['./carmgt.component.css']
})
export class CarmgtComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    $('#carmgt_form_dp').daterangepicker({
      'locale': {
        format: 'YYYY-MM-DD',
        separator: ' ~ ',
        applyLabel: '应用',
        cancelLabel: '取消',
        resetLabel: '重置',
      }
    });
  }

  create() {
    this.router.navigateByUrl('/home/carform/0');
  }
}
