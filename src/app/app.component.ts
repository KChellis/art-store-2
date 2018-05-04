import { Component } from '@angular/core';
import { Art } from './models/art.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedArt: Art = null;

  selectArt(art) {
    this.selectedArt = art;
  }
}
