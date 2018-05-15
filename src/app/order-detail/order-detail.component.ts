import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService} from '../order.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [OrderService]
})
export class OrderDetailComponent implements OnInit {
  selectedOrder;
  orderId: string;

  constructor(private orderService: OrderService, private router: ActivatedRoute, private location: Location,) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.orderId = urlParameters['id'];
    });
    this.orderService.selectOrder(this.orderId).subscribe(dataLastEmitted => {
     this.selectedOrder = dataLastEmitted;
   })
   this.selectedOrder.new = false;
   this.orderService.updateOrder(this.selectedOrder);
  }

  markNew() {
    this.selectedOrder.new = true;
    this.orderService.updateOrder(this.selectedOrder);
  }

  markSend() {
    this.selectedOrder.sent = true;
    this.orderService.updateOrder(this.selectedOrder);
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.selectedOrder);
  }

}
