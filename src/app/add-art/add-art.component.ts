import { Component, OnInit, Input} from '@angular/core';
import { Art } from '../models/art.model';
import { Router } from '@angular/router';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.css'],
  providers: [ArtService]
})
export class AddArtComponent implements OnInit {
  @Input() add: boolean;
  @Input() artList: Art[];
  constructor(private router: Router, private artService: ArtService) { }

  ngOnInit() {
  }

  addArt(newName, newImages, newMedium, newPrice, newMaterials, newStyles, newDescription, newKeywords) {
    let images = newImages.split(',');
    let materials = newMaterials.split(',');
    let styles = newStyles.split(',');
    let keywords = newKeywords.split(',');
    let art = new Art(newName, newMedium, materials, newPrice, images, styles, newDescription, keywords);
    this.artService.addArt(art);
    this.add = false;
  }
}
