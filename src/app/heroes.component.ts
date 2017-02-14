import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit { 
  
  constructor(private heroService: HeroService, private router: Router){
  } 
  
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().then(abc => this.heroes = abc)
  }
  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

