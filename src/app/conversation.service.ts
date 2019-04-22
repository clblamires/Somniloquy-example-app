import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  data: any = null;

  constructor( public http: Http) { }

  load(){
    return new Promise( resolve => {
      this.http.get("http://bonsai.lcsc.edu/cblamires/mysql/somniloquy/api.php/records/conversations")
        .map( response => response.json() )
        .subscribe( data => {
          this.data = data.records;
          resolve(this.data);
        })
    });
  }

  getConversations(){
    return this.load().then( data=> {
      return data;
    });
  }

  addConversation( data ){
    return new Promise( resolve => {
      this.http.post("http://bonsai.lcsc.edu/cblamires/mysql/somniloquy/api.php/records/conversations", data)
        .subscribe( response => {
          console.log(response);
          resolve(response);
        });
    })
  }

}
