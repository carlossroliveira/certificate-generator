import { CommonModule } from '@angular/common'
import { Component, signal } from '@angular/core'
import { BaseUi } from './_components/base-ui/base-ui'
import { Navbar } from './_components/navbar/navbar'
import { Certificado } from './pages/certificado/certificado'

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('certificate-generator');
  exibirNavbar: boolean = false;
}
