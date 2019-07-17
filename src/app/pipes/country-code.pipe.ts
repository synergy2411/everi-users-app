import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountryCodePipe implements PipeTransform {
  transform(value: any, code: string) {
    switch (code) {
      case 'US': return '+1 ' + value
      case 'AUS': return '+18 ' + value
      case 'CAD': return '+21 ' + value
      case 'IND': return '+91 ' + value
      default: return '+91 ' + value
    }
  }
}
