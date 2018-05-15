import { Component, OnInit} from '@angular/core';
import { Art } from '../models/art.model';
import { ArtService } from '../art.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css'],
  providers: [ArtService]
})
export class ArtListComponent implements OnInit {
  artList;
  userInput: string ='';
  filter: string='';
  add: boolean = false;

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit() {
    this.artService.getArt().subscribe(dataLastEmitted => {
     this.artList = dataLastEmitted;
   })
    // this.artList = this.artService.getArt();
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

  goToDetails(art) {
     this.router.navigate(['details', art.$key]);
   };
}
