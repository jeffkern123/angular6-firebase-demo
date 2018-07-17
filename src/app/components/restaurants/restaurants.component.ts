import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestaurantService } from '../../service/restaurant.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any;
  constructor( private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurantsList();
  }
  getRestaurantsList() {
  // Use snapshotChanges().map() to store the key
  this.restaurantService.getRestaurantsList().snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe(restaurants => {
    this.restaurants = restaurants;
  });
}
}
