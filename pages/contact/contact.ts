import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  sex: string;
  ls: number;
  clr: number;
  ht: number;
  wt: number;
  age: number;
  bmr: number;

  constructor(public navCtrl: NavController) {}

}
