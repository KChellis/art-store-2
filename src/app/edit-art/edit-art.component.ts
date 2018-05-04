import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css']
})
export class EditArtComponent implements OnInit {
  @Input() selectedArt: Art;
  @Input() edit: boolean;
  @Output() editSend = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  addMaterial() {
    this.selectedArt.materials.push('');
  }
  deleteMaterial() {
    this.selectedArt.materials.splice(-1, 1);
  }
  addStyle() {
    this.selectedArt.styles.push('');
  }
  deleteStyle() {
    this.selectedArt.styles.splice(-1, 1);
  }
  finishEdit() {
    this.editSend.emit(false);
  }
}
