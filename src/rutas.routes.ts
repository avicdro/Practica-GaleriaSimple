import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImagenComponent } from './app/imagen/imagen.component';

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'image/:id', component: ImagenComponent },
    { path: '', pathMatch: 'full', redirectTo: '/gallery' }
];
