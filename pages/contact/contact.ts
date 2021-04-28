import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  gender: string;
  ls: number;
  clr: number;
  ht: number;
  wt: number;
  age: number;
  bmr: number;

  constructor(public navCtrl: NavController) {}
  Calculate() {
    if (this.gender = "m") {
      this.bmr = 10 * this.wt + 6.25 * this.ht - 5 * this.age + 5;
      this.clr = this.bmr * this.ls;
    }
    else {
      this.bmr = 10 * this.wt + 6.25 * this.ht - 5 * this.age - 161;
      this.clr = this.bmr *this.ls;
    }
    this.clr = parseFloat (this.clr.toFixed(2));
  }
}
