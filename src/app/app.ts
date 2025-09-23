import { Component, signal } from '@angular/core'
import { Navbar } from "./_components/navbar/navbar"
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [ Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate-generator');
  exibirNavbar: boolean = false;
}
