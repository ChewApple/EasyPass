import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare let bootbox:any;
declare let bootpopup:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigateByUrl('login');
    localStorage.removeItem('currentUser');
    // bootpopup.alert('hello!');
  }
}
