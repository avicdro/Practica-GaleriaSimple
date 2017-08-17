import { Injectable } from '@angular/core';

@Injectable()
export class ImagenService {
  visiblesImages = [];
  getImages() {
    return this.visiblesImages = Images.slice(0);
  }
  getImage(id: number) {
    return Images.slice(0).find(Image => Image.id === id)
  }
  constructor() { }

}

const Images = [
  {'id': 1, 'category': 'boats', 'caption': 'Descripcion1', 'url': '../../../assets/images/descarga.png'},
  {'id': 2, 'category': 'camping', 'caption': 'Descripcion2', 'url': '../../../assets/images/Hd.jpg'},
  {'id': 3, 'category': 'camping', 'caption': 'Descripcion3', 'url': '../../../assets/images/images.jpg'},
  {'id': 4, 'category': 'library', 'caption': 'Descripcion4', 'url': '../../../assets/images/pedobear aliens meme.jpg'},
  {'id': 5, 'category': 'library', 'caption': 'Descripcion5', 'url': '../../../assets/images/Pedobear_Hipster.jpg'}
]
