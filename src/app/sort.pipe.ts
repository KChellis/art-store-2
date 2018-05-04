import {Pipe, PipeTransform} from '@angular/core';
import {Art} from './models/art.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Art[], filter: string) {
    if(filter) {
      input.sort(function(a,b) {return (a[filter] > b[filter]) ? 1 : ((b[filter] > a[filter]) ? -1 : 0);} );
    }
    return input;
  }
}
