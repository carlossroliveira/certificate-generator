import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgModel } from '@angular/forms'
import { PrimaryButton } from '../../_components/primary-button/primary-button'
import { SecondaryButton } from '../../_components/secondary-button/secondary-button'
import { CertificadoService } from '../../_services/certificado.service'
import { Certificado } from '../../interfaces/certificado'

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificados-form.html',
  styleUrl: './certificados-form.css',
})
export class CertificadosForm {
  constructor(private certificadoService: CertificadoService) {}

  atividade: string = '';

  certificado: Certificado = {
    atividades: [],
    nome: '',
    dataEmissao: '',
  };

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  submit() {
    if (!this.formValido()) {
      return;
    }

    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);
  }
}
