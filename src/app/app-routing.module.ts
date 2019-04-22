import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'conversations', pathMatch: 'full' },
  { path: 'home', redirectTo: 'conversations', pathMatch: 'full' },
  { path: 'conversations', loadChildren: './conversations/conversations.module#ConversationsPageModule' },
  { path: 'conversation/:id', loadChildren: './conversation/conversation.module#ConversationPageModule' },
  { path: 'add-phrase', loadChildren: './add-phrase/add-phrase.module#AddPhrasePageModule' },
  { path: 'edit-phrase', loadChildren: './edit-phrase/edit-phrase.module#EditPhrasePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
