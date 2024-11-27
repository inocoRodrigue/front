import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
