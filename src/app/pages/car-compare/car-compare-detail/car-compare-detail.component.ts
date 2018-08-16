import { Component, OnInit } from '@angular/core';
import { MessageService, CarService } from '../../../common/services';
import { Car } from '../../../common/models';
import { Constants } from '../../../common/Constant';

@Component({
  selector: 'app-car-compare-detail',
  templateUrl: './car-compare-detail.component.html',
  styleUrls: ['./car-compare-detail.component.scss'],
  viewProviders: [],
})

export class CarCompareDetailComponent implements OnInit {

  carsToCompare: Car[]  = [];

  constructor(private _carService: CarService,
    private _messageService: MessageService ) { }

  ngOnInit(): void {
    this.carsToCompare = JSON.parse(localStorage.getItem('dataToCompare'));
    this.carsToCompare.forEach(car => {
      this._carService.getDetailById(car.id).subscribe(carDetailRS => {
        car.detail = carDetailRS;
      });
    });
  }
}
