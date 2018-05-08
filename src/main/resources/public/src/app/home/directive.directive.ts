import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {mobileValidator} from '../shared/validators/Validators';

@Directive({
  selector: '[mobile]',
  // to use directive, need to provide the providers
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class DirectiveDirective {

  constructor() {
  }

}
