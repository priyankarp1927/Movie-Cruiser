import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MovieAppMaterialModule } from './movie-app-material.module';
import { SearchModule } from './search-bar/search.module';
import { MovieComponent} from './movie/movie.component';
import { MovieService } from './movie/movie.service';
import { Routes , RouterModule } from '@angular/router';



const routes: Routes = [

  { path: 'movie/:movieName',  component: MovieComponent}];


@NgModule({
 declarations: [
   AppComponent,
   MovieComponent
   ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   BrowserAnimationsModule,
   MovieAppMaterialModule,
   MaterialModule,
    SearchModule,
    RouterModule.forRoot(routes)
 ],
 exports: [
   BrowserAnimationsModule,
   RouterModule
],
 providers: [ MovieService ],
 bootstrap: [AppComponent]
})
export class AppModule { }
