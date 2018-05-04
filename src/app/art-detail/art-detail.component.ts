import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Art } from '../models/art.model';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css'],
  providers: [ArtService]
})
export class ArtDetailComponent implements OnInit {
  selectedArt: Art = null;
  edit: boolean = false;
  artId: number = null;

  constructor(private route: ActivatedRoute, private location: Location, private artService: ArtService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.artId = parseInt(urlParameters['id']);
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
