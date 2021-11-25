import { Component } from '@angular/core';
import { Product } from './components/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageParent = 'https://www.w3schools.com/howto/img_avatar.png';
  title = 'anguStore';
  imageUrl = 'https://picsum.photos/300?random=1';
  showImage: boolean = true;
  learningActive: boolean = false

  onLoaded(img: string) {
    console.log('loaded Log Padre', img);
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }

  toggleLearning() {
    this.learningActive = !this.learningActive;
  }
}
