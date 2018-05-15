import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Art } from '../models/art.model';
import { ArtService } from '../art.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css'],
  providers: [ArtService]
})
export class ArtDetailComponent implements OnInit {
  selectedArt;
  edit: boolean = false;
  artId: string;

  constructor(private router: ActivatedRoute, private location: Location, private artService: ArtService) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.artId = urlParameters['id'];
    });
    this.artService.selectArt(this.artId).subscribe(dataLastEmittedFromObserver => {
     this.selectedArt = dataLastEmittedFromObserver;
   }
 }
  editArt() {
    if(this.edit === true){
      this.edit = false;
    }else {
      this.edit = true;
    }

  }
}
