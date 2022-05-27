import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { login } from './login';
import { loginService } from './login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sub!: Subscription;
  newLogin: login = { email: "", password: "" }

  constructor(private service: loginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.newLogin.email != "" && this.newLogin.password != "")
    {
      this.sub = this.service.login(this.newLogin).subscribe({
        next: loggedUser => {
          localStorage.setItem('token', loggedUser.token);
          alert("Login efetuado com sucesso!");
          this.router.navigate(['/profile'])
        }
      })
    }
    else alert("Campos por preencher!");
  }

}
