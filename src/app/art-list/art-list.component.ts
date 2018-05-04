import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  @Input() childKegList: Keg[];
  constructor() { }

  ngOnInit() {
  }

}
