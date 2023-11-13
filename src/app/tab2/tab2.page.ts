import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon } from '@ionic/angular/standalone';
import { camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonIcon]
})
export class Tab2Page {

  constructor() {
    addIcons({ camera });
  }

}
