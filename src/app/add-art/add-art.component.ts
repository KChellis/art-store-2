import { Component, OnInit, Input} from '@angular/core';
import { Art } from '../models/art.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.css']
})
export class AddArtComponent implements OnInit {
  @Input() add: boolean;
  @Input() artList: Art[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addArt(newName, newImages, newMedium, newPrice, newMaterials, newStyles, newDescription, newKeywords) {
    let images = newImages.split(',');
    let materials = newMaterials.split(',');
    let styles = newStyles.split(',');
    let keywords = newKeywords.split(',');
    let art = new Art(newName, newMedium, materials, newPrice, images, styles, newDescription, keywords, this.artList.length+1);
    this.artList.push(art);
    this.add = false;
    this.router.navigate(['details', art.id]);
  }
}
