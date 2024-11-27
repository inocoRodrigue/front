import { Routes } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';

export const routes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: MessagesComponent },
];
