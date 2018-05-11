import {Art} from './art.model';

export class Order {
  new: boolean = true;
  sent: boolean = false;
  message: string = "";
  constructor(public name: string[], public address: string[], public items: Art[], public date: Date, public total: number, public email: string) {}
}
