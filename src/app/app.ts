import { CommonModule } from '@angular/common'
import { Component, signal } from '@angular/core'
import { ItemCertificado } from "./_components/item-certificado/item-certificado"
import { Navbar } from "./_components/navbar/navbar"
import { PrimaryButton } from "./_components/primary-button/primary-button"
import { SecondaryButton } from "./_components/secondary-button/secondary-button"

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, PrimaryButton, SecondaryButton, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate-generator');
  exibirNavbar: boolean = false;
}
