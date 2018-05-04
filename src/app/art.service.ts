import { Injectable } from '@angular/core';
import { Art } from './models/art.model';
import { ARTS } from './mock-art';

@Injectable()
export class ArtService {

  constructor() { }

  getArt() {
    return ARTS;
  }

  selectArt(artId: number){
    for (var i = 0; i <= ARTS.length - 1; i++) {
      if (ARTS[i].id === artId) {
        return ARTS[i];
      }
    }
  }

}
