import { CommonModule } from '@angular/common'
import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BaseUi } from './_components/base-ui/base-ui'
import { Navbar } from './_components/navbar/navbar'

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('certificate-generator');
  exibirNavbar: boolean = false;
}
