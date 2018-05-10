import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Itemdetail, ItemdetailService} from "../../service/itemdetail.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  public itemdetail: Observable<Itemdetail>;

  constructor(private routeInfo: ActivatedRoute,
              private idService: ItemdetailService) { }

  ngOnInit() {
    let id = this.routeInfo.snapshot.params['id'];
    this.itemdetail = this.idService.getItemdetail(id);
  }

}
