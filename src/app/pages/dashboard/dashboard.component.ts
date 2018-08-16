import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { CarService} from '../../common/services';
import { Car } from '../../common/models';
import { isArray } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  viewProviders: []
})

export class DashboardComponent implements OnInit {
  private carList: Car[];
  private user: any;

  constructor(private _router: Router,
    private _loadingService: TdLoadingService,
    private _carService: CarService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.user = JSON.parse(localStorage.getItem('user'));
      this._loadingService.register('cars.load');
      this._carService.getAll().subscribe(carListRs => {
        isArray(carListRs) ?  this.carList = carListRs :  this.carList = [];
        this._loadingService.resolve('cars.load');
      });
    }, 750);
  }

  showDetail(item: Car): void {
    localStorage.setItem('carData', JSON.stringify(item));
    this._router.navigate([`/carDetail/${item.id}`]);
  }

  compare(): void {
    this._router.navigate(['/carCompare']);

  }
}
