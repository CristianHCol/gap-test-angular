import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, CarService } from '../../common/services';
import { Car } from '../../common/models';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
  viewProviders: [MessageService],
})
export class CarDetailComponent implements OnInit {

  carDetail: any = {};
  car: Car;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _carService: CarService) { }

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._carService.getDetailById(id).subscribe(carDetailRS => {
      this.carDetail = carDetailRS ? carDetailRS : {};
      this.car = JSON.parse(localStorage.getItem('carData'));
    });
  }

}
