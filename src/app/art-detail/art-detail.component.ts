import { Component, OnInit, Input } from '@angular/core';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {
  @Input() selectedArt: Art;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedArt);
  }

}
