import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SecondaryButton } from '../../_components/secondary-button/secondary-button'

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado {}
