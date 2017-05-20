export class Movie {
  Title: string;
  year: string;
  poster: string;
  imdbID: string;

  constructor( imdbID: string, Title: string, year: string, poster: string) {
  this.imdbID = imdbID;
  this.Title = Title;
  this.year = year;
  this.poster = poster;
  }
  clone() {
  return new Movie(
  this.imdbID,
  this.Title,
  this.year,
  this.poster);
  }
}

