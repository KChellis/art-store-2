import {Pipe, PipeTransform} from '@angular/core';
import {Art} from './models/art.model';

@Pipe({
  name: "search",
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(input: Art[], search: string) {
    let results: Art[]= [];
    if(search) {
      for(var i = 0; i< input.length; i++){
        for(var j = 0; j< input[i].keywords.length; j++){
          let keyword =input[i].keywords[j].toLowerCase();
          if(keyword.includes(search.toLowerCase())){
            results.push(input[i]);
          }
        }
      }
      return results;
    }
    return input;
  }
}
