import { Component, inject, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent implements OnInit {
  private readonly messageService: MessagesService = inject(MessagesService);
  messages: Message[] = [];
  headers: string[] = [];
  selectedMessage: Message | null = null;

  openMessageDetails(message: Message): void {
    this.selectedMessage = message;
  }

  closeModal(): void {
    this.selectedMessage = null;
  }

  public ngOnInit(): void {
    this.messageService.getAllMessages().subscribe({
      next: (value: Message[]) => {
        this.messages = value;
        if (this.messages.length != 0) {
          this.headers = Object.keys(this.messages[0]);
        }
      },
      error: (error) => {},
    });
  }
}
