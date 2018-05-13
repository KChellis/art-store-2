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

  constructor(private route: ActivatedRoute, private location: Location, private artService: ArtService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.artId = urlParameters['id'];
    });
    this.selectedArt = this.artService.selectArt(this.artId);
  }
  editArt() {
    if(this.edit === true){
      this.edit = false;
    }else {
      this.edit = true;
    }

  }
}
