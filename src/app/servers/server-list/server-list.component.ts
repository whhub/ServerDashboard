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
        this.locations = this.servers.map(server => server.location)
          .filter((value,index,self)=>self.indexOf(value)==index).sort();
        this.versions = this.servers.map(server => server.version)
          .filter((value, index, self) => self.indexOf(value) == index).sort();
      }
    })
  }

  showAll(): void {
    this.filteredServers = this.servers;
    this.selectedLocation = ''
  }

  filteredServers: IServer[] = []
  servers: IServer[] = []
  locations: string[] = []
  versions: string[] = []

  get selectedLocation(): string {
    console.log(`selected location is ${this._selectedLocation}`)
    return this._selectedLocation;
  }
  set selectedLocation(value: string) {
    console.log(`set selected location to ${value}`)
    this._selectedLocation = value;
    this.isShowAll = !this.locations.includes(value)
  }

  get isShowAll(): boolean {
    return this._isShowAll;
  }
  set isShowAll(value: boolean) {
    this._isShowAll = value;
  }

  sub: Subscription;


  private _selectedLocation: string = 'Shanghai'
  private _isShowAll = true;
}
