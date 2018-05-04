import { Component, OnInit, Input } from '@angular/core';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  @Input() childArtList: Art[];
  constructor() { }

  ngOnInit() {
  }

}
