import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _api: ApiService) { }

  ngOnInit() {
  }
  onClickUser(){
    this._api.createNewUser()
      .subscribe( (res: any) =>{
        // success
        this._api.user = res;
        console.log(this._api.user)
      }, err => {
        //alert
      })

  }

}
