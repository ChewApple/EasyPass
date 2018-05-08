import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-presmgt',
  templateUrl: './presmgt.component.html',
  styleUrls: ['./presmgt.component.css']
})
export class PresmgtComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.router.navigateByUrl('home/presform/0');
  }
}
