import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService} from '../order.service'

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;
  orderId;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private location: Location,) { }

  ngOnInit() {
    this.order.new = false;
    this.route.params.forEach((urlParameters) => {
      this.orderId = parseInt(urlParameters['id']);
    });

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
