import { Component, OnInit} from '@angular/core';
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
  add: boolean = false;

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit() {
    this.artList = this.artService.getArt();
  }
  openAdd() {
    this.add = true;
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
