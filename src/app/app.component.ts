import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './car-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public cars: any = [];

  constructor(
    private carService: CarServiceService
  ) {
  }

  ngOnInit(): void {
    this.cars = this.carService.getAllCars()
        .subscribe(
          (data: any) => {
            if (data) {
              this.cars = data;
            }
          },
          err => console.log(err, 'failed to return data!')
        );
  }

  public toArray(val) {
    // https://github.com/angular/angular/issues/6392
    return Array.from(val);
  }
}
