import {Component} from '@angular/core';

@Component({
selector :'app-servers',
// template:`<app-server></app-server>
// <app-server></app-server>` ,
templateUrl: './servers.component.html',

styleUrls:['./servers.component.css']
})

export class ServersComponent{
   allowNewServer : boolean = false;
   serverStatus : string = 'Currently OFF !!!';
   serverName : string = '';
constructor(){
   setTimeout(() => {
       this.allowNewServer = true;
   },2000);
}
onServerADD(){
this.serverStatus = 'Server ON !!';
} 

onUpdateServerName(event : Event){
this.serverName = (<HTMLInputElement>event.target).value;
}


}