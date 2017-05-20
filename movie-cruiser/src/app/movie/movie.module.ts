import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie.component';


@NgModule({
  declarations: [
  MovieComponent
  ],
  imports: [
    CommonModule,
    MovieAppMaterialModule
  ],
  providers: [ MovieService ],
  exports: [ MovieComponent ]
})
export class MovieModule { }
