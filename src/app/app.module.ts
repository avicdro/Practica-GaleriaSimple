import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';

// Materialize
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';

// Components
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagenComponent } from './imagen/imagen.component';
import { NavbarVComponent } from './navbar-v/navbar-v.component';

// Services
import { ImagenService } from './imagen/share/image.service';
import { ImageFilterPipe } from './imagen/share/filter.pipe';

// Rutas
import { appRoutes } from '../rutas.routes';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagenComponent,
    ImageFilterPipe,
    NavbarVComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ImagenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
