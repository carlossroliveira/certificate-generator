import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SecondaryButton } from '../../_components/secondary-button/secondary-button'

@Component({
  selector: 'app-certificados',
  imports: [RouterLink, SecondaryButton],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {}
