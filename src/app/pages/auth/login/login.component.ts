import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  LoginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService,
    private router: Router,
    private titleService:Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Ingresar - A la Carta");
  }

  login() {
    this.LoginForm.markAllAsTouched();

    if (this.LoginForm.valid) {
      this.loading = true;
      this.LoginService.login(this.LoginForm.value).subscribe(
        (success: any) => {
          localStorage.setItem('token', success.token); //Guardar token
          this.router.navigate(['/']);
        },
        (err) => {
          this.loading = false;
          switch(err.status){
            case 401:
              swal.fire('Email o password incorrecta.', '', 'error'); //Disparar alerta con sweetalert
              break;
            default:
              swal.fire('No se pudo establecer conexión, prueba mas tarde', '', 'error')
              break;
          }
        }
      );
    }
  }

}
