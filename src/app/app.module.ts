import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService)
   ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }