import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(abc => abc.find(xyz => xyz.id === id));
    }
}
