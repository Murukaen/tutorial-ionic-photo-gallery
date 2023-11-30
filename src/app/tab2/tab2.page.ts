import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon, IonImg, IonCol, IonRow, IonGrid} from '@ionic/angular/standalone';
import { camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon, IonImg, IonCol, IonRow, IonGrid, NgFor]
})
export class Tab2Page {

  constructor(private photoService: PhotoService) {
    addIcons({ camera });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  getPhotos() {
    return this.photoService.photos;
  }
}
