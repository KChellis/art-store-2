import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Art } from '../models/art.model';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css'],
  providers: [ArtService]
})
export class EditArtComponent implements OnInit {
  @Input() selectedArt;
  @Input() edit: boolean;
  @Output() editSend = new EventEmitter();


  constructor(private artService: ArtService) { }

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
  addImage() {
    this.selectedArt.images.push('');
  }
  deleteImage() {
    this.selectedArt.images.splice(-1, 1);
  }
  addKeyword() {
    this.selectedArt.keywords.push('');
  }
  deleteKeyword() {
    this.selectedArt.keywords.splice(-1, 1);
  }
  finishEdit() {
    this.editSend.emit();
    this.artService.updateArt(this.selectedArt);
  }
}
