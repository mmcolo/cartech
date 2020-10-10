import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CarComponent } from './car/car.component';

import { CarService } from './services/car.service';

import { Routes, RouterModule } from '@angular/router';
import { TutoComponent } from './tuto/tuto.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'car/:id', component: CarComponent },
  { path: 'howdoit', component: TutoComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarComponent,
    TutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    CarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
