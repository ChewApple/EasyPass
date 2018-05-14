import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export function mobileValidator(mobile: FormControl): any {
  let value = (mobile.value || '') + '';
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(value);
  return valid ? null : {phone: {description: '手机号格式不正确'}};  // 如果返回为空，则表示校验通过
}

export function carnumValidator(mobile: FormControl): any {
  let value = (mobile.value || '') + '';
  var myreg = /^\d{11}$/;
  let valid = myreg.test(value);
  return valid ? null : {carnum: {description: '车架号'}};  // 如果返回为空，则表示校验通过
}

export function chineseValidator(name: FormControl): any {
  let value = (name.value || '') + '';
  var myreg = /^[\u4E00-\u9FA5]+$/;
  let valid = myreg.test(value);
  return valid ? null : {userName: {description: '请输入中文字符'}};  // 如果返回为空，则表示校验通过
}

export function passwordValidatorLength(password: FormControl): any {
  // let password: FormControl = info.get('password') as FormControl;
  let pvalue = (password.value || '') + '';
  let valid: boolean = (pvalue != '' && pvalue.length >= 6);
  return valid ? null : {password: {description: '密码必须大于6位'}};
}

export function passwordValidator(info: FormGroup): any {
  let password: FormControl = info.get('password') as FormControl;
  let passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
  let valid: boolean = password.value === passwordConfirm.value;
  return valid ? null : {passwordConfirm: {description: '密码验证不匹配'}};
}

// async validator for phone number unique validation
export function mobileUniqueValidator(phone: FormControl): any {
  let value = (phone.value || '') + '';
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(value);
  return Observable.of(valid ? null : {phone: true});
}
