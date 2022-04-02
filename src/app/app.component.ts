import { Component } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'iteso-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iteso-pae-frontend';
  name: string = 'Danny';
  persona = {nombre : 'Julio'};

  public SearchValue: string = '';

  flag: boolean = false;

  searchTimeout: any;

  movies: string[] = [
    'Los tres huastecos',
    'Alien',
    'Batman',
    'Una película de huevos',
    'Pineapple Express'
  ];

  filteredMovies: string[] = [];

  constructor() {
    setTimeout(() => {
      this.name = "Mónica"
      this.movies.push('Los 3 García');
    },2000);

    this.filteredMovies = this.movies;
  }

  ngOnInit(): void{
    socketIo.io('http://localhost:3000');
  }

  doOnClick(e:any){
    console.log('Me hicieron clic')
    e.preventDefault();
    this.movies.push(this.SearchValue);
  }

  setSearchValue(e:any){
    this.SearchValue = e.target.value;
  }

  doSearch(){
    if(this.searchTimeout){
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout= setTimeout(() => {
    const searchValue = this.SearchValue.toLocaleLowerCase();
    console.log(searchValue);
    this.filteredMovies = this.movies.filter(item => {
      return item.toLocaleLowerCase().includes(searchValue);   
    });
  },200);}
}
