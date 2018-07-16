import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Restaurant } from '../models/Restaurant';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'}
)
export class RestaurantService {
  // public restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  private dbPath = '/restaurants';
  restaurantsRef: AngularFireList<Restaurant> = null;
  // restaurants: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.restaurantsRef = db.list(this.dbPath);
  }
  getRestaurantsList(): AngularFireList<Restaurant> {
    return this.restaurantsRef;
  }
}


