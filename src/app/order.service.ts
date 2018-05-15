import { Injectable } from '@angular/core';
import { Order } from './models/order.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class OrderService {
  orderList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.orderList = database.list('orders');
  }

  getOrders() {
    return this.orderList;
  }

  selectOrder(orderId: string){
    return this.database.object('orders/' + orderId);
  }

  updateOrder(order){
    var entryInFirebase = this.selectOrder(order.$key);
    entryInFirebase.update(order);
  }

  addOrder(order) {
    this.orderList.push(order);
  }

  deleteOrder(order) {
    let entryInFirebase = this.selectOrder(order.$key)
  }

}
