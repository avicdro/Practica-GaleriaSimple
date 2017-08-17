import { Component, OnInit } from '@angular/core';
import { ImagenService } from './share/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  image: any;
  constructor( private imagenService: ImagenService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.image = this.imagenService.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
