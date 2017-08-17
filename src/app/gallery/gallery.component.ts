import { Component, OnChanges, Input } from '@angular/core';
import { ImagenService } from '../imagen/share/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']

})
export class GalleryComponent implements OnChanges {
  @Input() filterBy = 'all';
  titles = 'Todas las fotos';
  visibleImages: any[] = [];

  constructor(private imagenService: ImagenService) {
    this.visibleImages = this.imagenService.getImages();
  }
  ngOnChanges(): void {
    this.visibleImages = this.imagenService.getImages();
  }
}
