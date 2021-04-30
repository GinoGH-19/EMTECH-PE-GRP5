import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  gender: string;
  al: number;
  dci: number;
  ht: number;
  wt: number;
  age: number;
  bmr: number;
  car: number;
  pro: number;
  fat: number;

  constructor(public navCtrl: NavController) {}
  Calculate() {
    if (this.gender == "m") {
      this.bmr = 10 * this.wt + 6.25 * this.ht - 5 * this.age + 5;
      this.dci = this.bmr * this.al;
    }
    else {
      this.bmr = 10 * this.wt + 6.25 * this.ht - 5 * this.age - 161;
      this.dci = this.bmr *this.al;
    }
    this.dci = parseFloat (this.dci.toFixed(2));

    this.car = this.dci * .6;
    this.pro = this.dci * .125;
    this.fat = this.dci * .275
    
    this.car = parseFloat (this.car.toFixed(2));
    this.pro = parseFloat (this.pro.toFixed(2));
    this.fat = parseFloat (this.fat.toFixed(2));
  }
}