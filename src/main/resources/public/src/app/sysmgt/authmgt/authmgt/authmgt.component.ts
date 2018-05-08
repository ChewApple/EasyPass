import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Role, RoleService} from "../../../service/role.service";

@Component({
  selector: 'app-authmgt',
  templateUrl: './authmgt.component.html',
  styleUrls: ['./authmgt.component.css']
})
export class AuthmgtComponent implements OnInit {

  public roles: Role[];

  constructor(private router:Router,
              private httpClient: HttpClient,
              private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      res =>{
        this.roles = res;
        this.roles.map(
          role=>{
            let params = new HttpParams()
              .set('authids', role.authlist);
            console.log('id清单：'+ role.authlist);
            this.httpClient.post('/api/authname',params).subscribe(
              res=>{
                // console.log(res.toString());
                role.authlist = res.toString();
              },
              err=>{

              }
            );
          }
        );

      },
      err=>{
        console.log('错误：'+err.message);
      }
    );
  }
  edit(role:Role){
    this.router.navigateByUrl('/home/pstnform/'+role.roleid);
  }
}
