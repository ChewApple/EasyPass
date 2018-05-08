import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder();
  // private checkboxShangpai:any;

  private formModel: FormGroup = this.fb.group({
    checkboxTidangi: [''],
    checkboxGuohu: [''],
    checkboxShangpai: [''],
    checkboxWeizhang: [''],
    checkboxDiya: [''],
    checkboxWeituo: [''],
    checkboxNianjian: [''],
    checkboxHuanbu: [''],
    checkboxQita: [''],
    contacts: this.fb.array([{}])
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
    $('#odrform_dp').datepicker({
      autoclose: true
    });
    $('#odrform_dp2').datepicker({
      autoclose: true
    });

  }

  cancel() {
    this.router.navigateByUrl('/odrmgt');
  }
}
