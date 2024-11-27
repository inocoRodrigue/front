import { Component, OnInit } from '@angular/core';
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
  messages: Message[] = [];
  headers: string[] = [];

  public constructor(private readonly messageService: MessagesService) {}

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