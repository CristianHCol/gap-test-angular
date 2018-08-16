import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, CarService } from '../../common/services';
import { Car } from '../../common/models';
import { Constants } from './../../common/Constant';

@Component({
  selector: 'app-car-compare',
  templateUrl: './car-compare.component.html',
  styleUrls: ['./car-compare.component.scss'],
  viewProviders: [],
})

export class CarCompareComponent implements OnInit {

  carList: Car[]  = [];
  carsSelected: Car[]  = [];

  constructor(private _carService: CarService,
    private _router: Router,
    private _messageService: MessageService ) { }

  ngOnInit(): void {
    this._carService.getAll().subscribe(carListlRS => {
      this.carList = carListlRS ? carListlRS : [];
    });
  }

  selectOotion(item: Car): void {
    if (this.carsSelected.length < 3) {
      item.selected =  !item.selected;
      if (item.selected) {
        this.carsSelected.push(item);
      } else {
        this.cleanSelectedById(item.id);
     }
    } else {
      if (item.selected) {
        item.selected =  !item.selected;
        this.cleanSelectedById(item.id);

      } else {
        this._messageService.openAlert(Constants.Messages.COMPARE_FAILED, Constants.Messages.COMPARE_FAILED_MESSAGE);
      }
    }
  }

  cleanSelectedById(id: number): void {
    this.carsSelected = this.carsSelected.filter(function( car ) {
      return car.id !== id;
    });
  }

  doCompare(): void {
    localStorage.setItem('dataToCompare', JSON.stringify(this.carsSelected));
    this._router.navigate(['/carCompareDetail']);


  }
}
