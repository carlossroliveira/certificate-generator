import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificados-form.html',
  styleUrl: './certificados-form.css',
})
export class CertificadosForm {
  constructor(private certificadoService: CertificadoService, private route: Router) {}

  @ViewChild('form') form!: NgForm;

  atividade: string = '';

  certificado: Certificado = {
    id: '',
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
    if (this.atividade.length == 0) {
      return;
    }

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

  estadoInicialCertificado(): Certificado {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: '',
    };
  }

  submit() {
    if (!this.formValido()) {
      return;
    }

    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    /* this.certificado = this.estadoInicialCertificado();
    this.form.resetForm(); */
  }
}
