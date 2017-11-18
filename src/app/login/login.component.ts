import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginform: FormGroup;
  i_username: string;
  i_password: string;

  constructor(private fb: FormBuilder, private router: Router, private user: UserService, private http: HttpClient) {
    this.loginform = this.fb.group({
      'fc_username': new FormControl('', Validators.required),
      'fc_password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  loginUser(e) {
    /* call api to get token */
    this.http.get('./assets/data/jwt.json').subscribe(data => {
      localStorage.setItem('token', JSON.stringify(data));
      console.log(this.i_username, this.i_password, data);
      if (this.i_username === 'admin' && this.i_password === 'admin') {
        this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
      }
    });
  }

}
