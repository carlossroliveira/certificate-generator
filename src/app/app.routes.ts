import { Routes } from '@angular/router'
import { CertificadoComponent } from './pages/certificado/certificadoComponent'
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
    component: CertificadoComponent,
  },
];
