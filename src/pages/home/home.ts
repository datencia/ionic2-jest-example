import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  lastUpdated: string;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.lastUpdated = moment('2017-05-22').format('MM/DD/YYYY');
  }

}
