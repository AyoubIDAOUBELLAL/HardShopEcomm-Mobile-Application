import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { SignUp } from '../sign-up/sign-up';

import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  login;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public data:Data
  ) {
    this.login = this.formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(50), Validators.required])],
    });
  }

  
  loginForm() {
    console.log(this.login.value);
    this.data.postLogin(this.login.value)
      .then(ansewer => 
        console.log(ansewer)
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goToSignUp(){
    this.navCtrl.push(SignUp);
  }

}