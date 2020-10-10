import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  cars=[
    {
      marque: 'Reunault',
      modele: 'Mégane RS',
      annee: '2019',
      puissance: 280,
      transmition: 'Automatique',
      urlImage: '/assets/image/megan.png',
      bg: '/assets/bg/fond_megan.png',
      desc: ''
    },
    {
      marque: 'Nissan',
      modele: 'GTR',
      annee: '2009',
      puissance: 485,
      transmition: 'Automatique',
      urlImage: '/assets/image/ngtr.png',
      bg: '/assets/bg/fond_gtr.png',
      desc: ''
    },
    {
      marque: 'Seat',
      modele: 'Léon',
      annee: '2015',
      puissance: 280,
      transmition: 'Manuel',
      urlImage: '/assets/image/leon.png',
      bg: '/assets/bg/fond_leon.png',
      desc: ''
    },
    {
      marque: 'Volkswagen',
      modele: 'Golf',
      annee: '2020',
      puissance: 105,
      transmition: 'Automatique',
      urlImage: '/assets/image/golf.png',
      bg: '/assets/bg/fond_golf.png',
      desc: ''
    }
  ];

  carSubj = new Subject();
  constructor() {
  }

  emitCar(){
    this.carSubj.next(this.cars.slice())
  }
}
