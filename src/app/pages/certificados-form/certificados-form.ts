import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgModel } from '@angular/forms'
import { PrimaryButton } from '../../_components/primary-button/primary-button'
import { SecondaryButton } from '../../_components/secondary-button/secondary-button'

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificados-form.html',
  styleUrl: './certificados-form.css',
})
export class CertificadosForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['React', 'Angular', 'Vue'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.atividades.length > 0 && this.nome.length > 0;
  }
}
