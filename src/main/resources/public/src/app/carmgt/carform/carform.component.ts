import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    $('#carform_dp').datepicker({
      autoclose: true,
      pickerPosition: 'bottom-right',
      language: 'zh-CN'
    });
  }

  cancel() {
    this.router.navigateByUrl('/carmgt');
  }
}
