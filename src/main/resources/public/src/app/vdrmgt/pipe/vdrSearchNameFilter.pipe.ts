import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'vdrSearchNameFilter'
})
export class VdrSearchNameFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyWord: String): any {
    if (!field || !keyWord) {
      return list;
    }
    return list.filter(item => {
      let itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyWord) >= 0;
    });
  }

}
