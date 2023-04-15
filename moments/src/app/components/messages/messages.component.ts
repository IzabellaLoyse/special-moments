import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  faTimes = faTimes;
  public message!: string;

  constructor(private messageService: MessageService) {}

  public ngOnInit(): void {
    this.messageService.message$.subscribe((message) => {
      this.message = message;
    });
  }

  public onLeave(): void {
    this.messageService.clearMessage();
  }
}
