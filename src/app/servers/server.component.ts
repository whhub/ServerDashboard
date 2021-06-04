import { Component, Input, OnInit } from '@angular/core';
import { IServer } from '../interface/server';

@Component({
  selector: 'sd-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() server: IServer;

}
