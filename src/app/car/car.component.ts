import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../services/car.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars : any[] = [];
  oneCar: any;
  theCar: any;
  carSubscription : Subscription;

  constructor( private carService : CarService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.carSubscription = this.carService.carSubj.subscribe(
      (arrayCar : any[])=>{
        this.cars = arrayCar;
      }
    );
    this.carService.emitCar();
    
    // Recupération de l'index d'un voiture dans le tableau
    this.theCar = this.route.snapshot.paramMap.get("id");
    this.oneCar = this.cars[this.theCar];
    console.log('Id de la voiture: '+this.theCar);
    this.colorText(this.theCar);
    
    //recuperation de l'url de l'image de la voiture
    let body = document.getElementById('main').style;
    let url = "url('"+this.oneCar.bg+"')";
    console.log(url);
    body.backgroundImage = url;
    body.backgroundPosition = "center";
    body.backgroundSize = "cover";
    body.backgroundRepeat = "no-repeat";
  }

  unsetBg(){
    document.getElementById('main').style.backgroundImage = "unset";
  }

  colorText(i){
    let right = document.getElementById('right').style;
    let left = document.getElementById('left').style;
    if(i == 0){
      left.color = "grey";
    }else if( i == 1){
      right.color = "white";
    }else if( i == 2){
      left.color = "white";
    }else if( i == 3){
      right.color = "white";
    }
  }

  ngOnDestroy(){
    this.carSubscription.unsubscribe();
  }
}
