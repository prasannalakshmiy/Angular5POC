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
serverstatus: string = 'serverName1';

getserverstatus() : string {
    return this.serverstatus;
}

}