import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Restaurant } from '../models/Restaurant';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantService {
  // public restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants: Observable<any[]>;
  constructor(afs: AngularFireDatabase) {
    // this.restaurantsCollection = afs.collection<Restaurant>('restaurants');
    this.restaurants = afs.list('restaurants').valueChanges();
   }
   getRestaurants() {
     return this.restaurants;
   }
}


