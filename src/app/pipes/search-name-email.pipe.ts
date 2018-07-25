import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNameEmail'
})
export class SearchNameEmailPipe implements PipeTransform {

  transform(value: any, filter: string): boolean {
    return value.firstName.toLowerCase().includes(filter)
      || value.lastName.toLowerCase().includes(filter)
      || value.email.toLowerCase().includes(filter);
  }

}
