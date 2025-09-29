import { CommonModule } from '@angular/common'
import { Component, OnInit, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BaseUi } from './_components/base-ui/base-ui'
import { Navbar } from './_components/navbar/navbar'
import { CertificadoService } from './_services/certificado.service'

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('certificate-generator');
  exibirNavbar: boolean = false;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
