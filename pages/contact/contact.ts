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
  }
}
