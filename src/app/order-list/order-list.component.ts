import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList:  FirebaseListObservable<any[]>;
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {

    this.orderList = this.orderService.getOrders();
  }

  goToDetails(order) {
    this.router.navigate('orders/' + order.$key);
  }
  onChange(filter) {
  }

}
