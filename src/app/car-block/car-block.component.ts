import { Component, Input, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { CarInfoI } from '../app.model';

@Component({
  selector: 'app-car-block',
  templateUrl: './car-block.component.html',
  styleUrls: ['./car-block.component.scss']
})
export class CarBlockComponent implements OnInit {
  private carInfo: CarInfoI;
  @Input() car: any;

  constructor(
    private carService: CarServiceService
  ) { }

  ngOnInit() {
    this.carService.getCarData(this.car.id).subscribe((result: CarInfoI) => {
      if (result) {
        this.carInfo = result;
      }
    });
  }

}
