import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
// import { Router } from './routing';
// import { OrderService } from '../order.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: Order[];
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {

    this.orderList = this.orderService.getOrders();
  }

  goToDetails(order) {
    let orderId = this.orderService.getOrderById(order);
    this.router.navigate('orders/' + orderId);
  }
  onChange(filter) {
  }

}
