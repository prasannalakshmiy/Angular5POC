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
   servers = ['sfsfgsrgf','sgsrgs','srtrtuhryju'];
constructor(){
   setTimeout(() => {
       this.allowNewServer = true;
   },2000);
}
onServerADD(){
this.serverStatus = 'Server ON !!';
this.servers.push(this.serverName);
console.log(this.servers)
} 

onUpdateServerName(event : Event){
this.serverName = (<HTMLInputElement>event.target).value;
console.log(this.serverName)
}


}