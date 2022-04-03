import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus ="no server was created";
  serverName='';


  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  onServerCreation(){
    return this.serverCreationStatus ="server created";
  }

  onUpdateNameServer(event:Event){
    console.log(event);
    return this.serverName=(<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
  }

}
