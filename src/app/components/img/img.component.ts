import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit {
  imageDefault: string = '';

  @Input('imageDefault')
  set changeImage(newImg: string) {
    this.imageDefault = newImg;
    console.log('set changeImage', 'imgValue =>', this.imageDefault);
    //todo
  }

  @Input() alt: string = '';
  @Output() imageLoaded = new EventEmitter<string>();
  // counter = 0;
  // counterFn: number | undefined;
  constructor() {
    // before render
    // NO async -- once time execution
    console.log('constructor', 'imgValue =>', this.imageDefault);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before - during render
    // changes inputs -- multiples times execution
    console.log('ngOnChanges', 'imgValue =>', this.imageDefault);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch and more -- once time execution
    console.log('ngOnInit', 'imgValue =>', this.imageDefault);
    // this.counterFn = window.setInterval(() => {
    //   this.counter++;
    //   console.log('counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time execution
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time execution
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imageError() {
    this.imageDefault = '../../../assets/images/default.png';
  }
  imageError2() {
    console.log('error');
  }

  imgLoaded(imageDefault: string) {
    console.log('loaded Log Hijo');
    this.imageLoaded.emit(imageDefault);
  }
}

/*

Ciclo de vida de los componentes :

Constructor: cuando se corre una instancia
ngOnChanges : corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.
ngOnInit: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.
ngAfcterViewInit: corre cuando los hijos de ese componentes se han renderizado.
NgOnDestroy: Corre cuando se elimina el componente.

*/
