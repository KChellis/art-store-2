import { Injectable } from '@angular/core';
import { Art } from './models/art.model';
import { ARTS } from './mock-art';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArtService {
  artList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.artList = database.list('art');
  }

  getArt() {
    return this.artList;
  }

  selectArt(artId: string){
    return this.database.object('art/' + artId);
  }

}
