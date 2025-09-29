import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ItemCertificado } from "../../_components/item-certificado/item-certificado"
import { SecondaryButton } from "../../_components/secondary-button/secondary-button"
import { CertificadoService } from '../../_services/certificado.service'
import { Certificado } from '../../interfaces/certificado'

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterModule],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: Certificado[] = [];

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados;
  }
}
