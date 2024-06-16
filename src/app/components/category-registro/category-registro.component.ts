import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  selector: 'app-category-registro',
  templateUrl: './category-registro.component.html',
  styleUrls: ['./category-registro.component.css']
})
export class CategoryRegistroComponent {
  miFormulario!: FormGroup;
  showSubMenu: boolean = false;
  formSubmitted: boolean = false;  // Variable para controlar el estado de envío del formulario

  constructor(private fb: FormBuilder,
              private router: Router
  ) {}
  
  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      username: ['', Validators.required],
      birthdate: ['', [Validators.required, this.minimumAgeValidator(16)]]
    }, { validators: this.passwordMatchValidator });
  }
  
  private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  private minimumAgeValidator(minAge: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const birthdate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      const m = today.getMonth() - birthdate.getMonth();
      return (age > minAge || (age === minAge && m >= 0)) ? null : { minAge: true };
    };
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.miFormulario.valid){  
      console.log("Resultado: " + this.miFormulario.get('name')!.value);
      window.alert('Usuario registrado exitosamente');
      this.router.navigate(['/index']);
    }
  }

}
