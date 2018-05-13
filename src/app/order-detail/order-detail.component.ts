import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService} from '../order.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order;
  orderId: string;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private location: Location,) { }

  ngOnInit() {
    this.order.new = false;
    this.route.params.forEach((urlParameters) => {
      this.orderId = urlParameters['id'];
    });

    this.order = this.orderService.getOrder(this.orderId);
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
