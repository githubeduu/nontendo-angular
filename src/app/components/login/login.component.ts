import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginFormComponent {
  username: string;
  password: string;

  onSubmit() {
    // Aquí puedes implementar la lógica de autenticación
    // Por ejemplo, enviar los datos al servidor para validarlos
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
