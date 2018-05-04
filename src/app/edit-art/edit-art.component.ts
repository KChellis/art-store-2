import { Component, OnInit, Input } from '@angular/core';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css']
})
export class EditArtComponent implements OnInit {
  @Input() selectedArt: Art;
  @Input() edit: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
