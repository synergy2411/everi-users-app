import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: string) {
    console.log("[TRANSFORM]")
    if (filteredStatus === "") {
      return value;
    }

    let resultArr = [];
    for (let todo of value) {
      if (todo['status'] === filteredStatus) {
        resultArr.push(todo);
      }
    }
    return resultArr;

  }

}
