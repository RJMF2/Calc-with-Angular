import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(history: any, key?: any): any {
    if(key===undefined) return history;
    else{
      return history.filter(function(op){
        return op.includes(key);
      })
    }
  }

}
