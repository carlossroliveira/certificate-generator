import { Routes } from '@angular/router'
import { Certificado } from './pages/certificado/certificado'
import { CertificadosForm } from './pages/certificados-form/certificados-form'
import { Certificados } from './pages/certificados/certificados'

export const routes: Routes = [
  {
    path: '',
    component: Certificados,
  },
  {
    path: 'certificados/novo',
    component: CertificadosForm,
  },
  {
    path: 'certificados/:id',
    component: Certificado,
  },
];
