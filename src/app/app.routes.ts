import { Routes } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';
import { PartnerComponent } from './components/partner/partner.component';

export const routes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'partners', component: PartnerComponent },
  { path: '**', component: MessagesComponent },
];
