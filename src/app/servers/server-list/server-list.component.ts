import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IServer } from 'src/app/interface/server';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'sd-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit, OnDestroy {

  constructor(private serverService: ServerService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    console.log('In OnInit');

    this.sub = this.serverService.getServers().subscribe({
      next: servers => {
        this.servers = servers;
        this.filteredServers = this.servers;
      }
    })
  }

  showAll(): void {
    this.filteredServers = this.servers;
  }

  filteredServers: IServer[] = []
  servers: IServer[] = []

  sub:Subscription;
}
