import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Art } from '../models/art.model';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css'],
  providers: [ArtService]
})
export class ArtListComponent implements OnInit {
  artList: Art[];
  @Output() sendArt = new EventEmitter();
  constructor(private artService: ArtService) { }

  ngOnInit() {
    this.artList = this.artService.getArt();
    console.log(this.artList)
  }
  selectArt(art) {
    this.sendArt.emit(art);
  }
}
