import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message:string='';
  messages:string[]=[];
  socketClient:any=null;

  constructor() { 
    this.socketClient=socketIo.io('http://localhost:3000');
  }

  ngOnInit(): void {
    //socketIo.io('http://localhost:3000');
  }

  send(){
    console.log('Enviar mensaje')
    this.messages.push(this.message);
    this.message='';
  }

}
