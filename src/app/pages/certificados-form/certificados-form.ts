import { Component } from '@angular/core'
import { PrimaryButton } from "../../_components/primary-button/primary-button"
import { SecondaryButton } from "../../_components/secondary-button/secondary-button"

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificados-form.html',
  styleUrl: './certificados-form.css'
})
export class CertificadosForm {

}
