import { inject, Injectable } from '@angular/core';
import { BACK_END_URL } from './HttpConfig';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private readonly BASE_URL: string = `${BACK_END_URL}messages`;
  private readonly httpClient: HttpClient = inject(HttpClient);

  public getAllMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.BASE_URL);
  }
}
