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
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().then(abc => this.heroes = abc)
  }
  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return }
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero: Hero) {
    this.heroService.delete(hero.id).then(() => {this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {this.selectedHero = null;}  
    });

  }
}

