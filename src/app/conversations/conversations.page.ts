import { Component, OnInit } from '@angular/core';
import { ConversationService } from './../conversation.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  conversations: any;

  constructor( public conversationService: ConversationService , public alertCtrl: AlertController) {
    this.loadConversations();
  }

  loadConversations(){
    this.conversations = [];
    this.conversationService.getConversations().then( data=> {
      this.conversations = data;
    })
  }



  async addConversation(){
    const prompt = await this.alertCtrl.create({
      header: "New Conversation",
      inputs: [{
        name: 'conversation_name',
        type: 'text',
        placeholder: 'Conversation Name'
      }],
      buttons: ['Cancel', {
        text: "Save",
        handler: (data) => {
          let newConversation = {
            "name" : data.conversation_name,
            "date" : new Date().toISOString().slice(0, 19).replace('T', ' ')
          }
          this.conversationService.addConversation( newConversation ).then( () => {
            this.loadConversations();
          });
        }
      }]
    });
    await prompt.present();
  }

  

  ngOnInit() {
  }

}
