import { Component, OnInit , OnDestroy} from '@angular/core';
import { CarService } from '../services/car.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  cars: any[]= [];
  carSubscription: Subscription;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carSubscription = this.carService.carSubj.subscribe(
      (cars: any[])=>{
        this.cars = cars;
      }
    );
    this.carService.emitCar();
  }

  ngOnDestroy(){
    this.carSubscription.unsubscribe();
  }

}
