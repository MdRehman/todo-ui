import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Rehman'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalid: boolean = false


  constructor(private router: Router, private hardCodeAuth: HardCodedAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardCodeAuth.authenticate(this.username, this.password)) {

      this.router.navigate(['welcome', this.username])
      this.invalid = false
    } else {
      this.invalid = true
    }
  }

}
