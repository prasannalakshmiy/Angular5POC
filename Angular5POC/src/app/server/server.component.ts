import {Component} from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:[`
 h1{
     color: blue;
 }
`]
})
export class ServerComponent {
serverID : number = 10;
serverstatus = Math.random()>0.5 ? 'online': 'offline';


getserverstatus() : string {
    return this.serverstatus;
}

}