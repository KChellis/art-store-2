import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
// import { Router } from './routing';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.order.new = false;
    let orderId =
    this.order = this.orderService.getOrder(orderId);
  }

  markNew() {
    this.order.new = true;
    this.router.navigate('orders');
  }

  markSend() {
    this.order.sent = true;
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.order);
  }

}
