import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private auth: AuthenticateService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  login() {
    this.auth.login(this.loginForm.value).subscribe((result) => {
      console.log(result)
    })
  }

}
