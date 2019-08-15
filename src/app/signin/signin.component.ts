import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  // outputSignIn = {};

  constructor(public _api: ApiService) { }

  ngOnInit() {

  }

  // onClick(){
  //   this._api.signIn().subscribe(
  //     (res: any) => {
  //       this.outputSignIn = res;
  //     }
  //   )
  // }

}
