import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Art } from '../models/art.model';
import { ArtService } from '../art.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css'],
  providers: [ArtService]
})
export class ArtListComponent implements OnInit {
  artList: Art[];
  userInput: string ='';
  filter: string='';
  @Output() sendArt = new EventEmitter();
  @Output() editSend = new EventEmitter();

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit() {
    this.artList = this.artService.getArt();
  }
  selectArt(art) {
    this.sendArt.emit(art);
  }
  addArt() {
    let art = new Art('', '', [''], null, [''], [''], '', [''], this.artList.length);
    this.artList.push(art);
    this.sendArt.emit(art);
    this.editSend.emit(true);
  }
  searchInput(value:string) {
    this.userInput = value;
  }

  onChange (input) {
    this.filter = input;
  }

  goToDetails(art: Art) {
     this.router.navigate(['details', art.id]);
   };
}
