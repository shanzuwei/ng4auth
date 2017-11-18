import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginform: FormGroup;
  i_username: string;
  i_password: string;

  constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      'fc_username': new FormControl('', Validators.required),
      'fc_password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  loginUser(e) {
    console.log(this.i_username, this.i_password);
  }

}
