import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        `
})
export class AppComponent { 
    title = 'Baldurs Gate companions';
}
