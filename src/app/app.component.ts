import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterArtList: Art[] = [
    new Art ('Christmas tree ornaments', 'Fused Glass', ['Bullseye Glass', 'Silver finding'], 7.00, 'no image yet',
    ['Regular Striped', 'Dot Striped', 'Dots'], 'Fused Glass Christmas Tree Ornaments in a variety of patterns. All pieces are handmade and no two pieces are exactly alike.'),
    new Art ('Dichroic Glass Necklaces', 'Fused Glass', ['Dichroic glass', 'Silver Findings', 'Black Satin Cord'], 25.00, 'no image yet', ['Plumage', 'Clockworks', 'Circuits', 'String Theory', 'Labyrinth'])
  ];
}
