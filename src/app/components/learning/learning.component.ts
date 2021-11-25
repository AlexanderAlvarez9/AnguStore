import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  imageParent = 'https://www.w3schools.com/howto/img_avatar.png';
  title = 'anguStore';
  age = 18;
  name = 'Alexander';
  imageUrl = 'https://picsum.photos/300?random=1';
  btnDisabled = true;

  showImage = true;

  person = {
    name: 'Alexander',
    age: 18,
    imageUrl: 'https://picsum.photos/300?random=2',
    value: 9,
    pet: 'cat',
  };
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  emojis: string[] = ['😂', '🐦', '🐳', '🌮', '💚'];
  newEmoji = '';
  widthImage = 10;

  register = {
    name: 'Alexander',
    email: 'a@b.c',
    password: '123456',
  };

  products: Product[] = [
    {
      id: 1,
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/300?random=1',
      category: 'all',
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/300?random=2',
    },
    {
      id: 3,
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/300?random=3',
    },
    {
      id: 4,
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/300?random=4',
    },
    {
      id: 5,
      name: 'Casa para perro',
      price: 34,
      image: 'https://picsum.photos/300?random=5',
    },
    {
      id: 6,
      name: 'Gafas',
      price: 3434,
      image: 'https://picsum.photos/300?random=6',
    },
    {
      id: 7,
      name: 'Juguete de mascota',
      price: 3434,
      image: 'https://picsum.photos/300?random=7',
    },
    {
      id: 8,
      name: 'Computadora',
      price: 34340,
      image: 'https://picsum.photos/300?random=8',
    },
  ];

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  addAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollTop = target.scrollTop;
    console.log('scrollTop', scrollTop);
  }
  changeName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.person.name = target.value;
  }

  addName() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  deleteEmoji(index: number) {
    this.emojis.splice(index, 1);
  }

  onRegister() {
    console.log('register', this.register);
  }

  onLoaded(img: string) {
    console.log('loaded Log Padre', img);
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
