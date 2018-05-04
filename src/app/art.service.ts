import { Injectable } from '@angular/core';
import { Art } from './models/art.model';
import { ARTS } from './mock-art';

@Injectable()
export class ArtService {

  constructor() { }

  getArt() {
    return ARTS;
  }

}
