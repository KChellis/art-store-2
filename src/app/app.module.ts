import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ArtListComponent } from './art-list/art-list.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { EditArtComponent } from './edit-art/edit-art.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { routing } from './app.routing';
import { AddArtComponent } from './add-art/add-art.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ArtListComponent,
    ArtDetailComponent,
    EditArtComponent,
    SearchPipe,
    SortPipe,
    AddArtComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
