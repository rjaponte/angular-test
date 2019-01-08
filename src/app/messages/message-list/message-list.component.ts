import { Component, OnInit } from '@angular/core';
import { LastMessage, MESSAGES } from '../../last-message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages: LastMessage[] = MESSAGES;

  constructor() { }

  ngOnInit() {
  }

}
