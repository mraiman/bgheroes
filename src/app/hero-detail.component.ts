import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
    constructor( 
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location)
     {}
    @Input()
    hero: Hero;
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
    }
    goBack() {
      this.location.back();
    }
    save(){
      this.heroService.update(this.hero).then(() => this.goBack);
    }
}
