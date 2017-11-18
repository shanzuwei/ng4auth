import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: UserService, private http: HttpClient) {
  }

  ngOnInit() {
  }


  checkUser(e) {
    /* send token and check user */
    console.log('Bearer ' + localStorage.getItem('token'));
    this.http.post('./assets/data/jwt.json', this.user.getUsername, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }).subscribe(data => {
      console.log(data);
    });
  }

}
