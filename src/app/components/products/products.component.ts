import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}
