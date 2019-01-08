import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';

import { PipesModule } from '../pipes/pipes.module';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { LastMessageComponent } from './last-message/last-message.component';
import { UserIconsComponent } from './user-icons/user-icons.component';

@NgModule({
    declarations: [MessageListComponent, LastMessageComponent, UserIconsComponent],
    imports: [PipesModule, MatListModule, CommonModule, MessagesRoutingModule],
    exports: [],
    providers: [],
})
export class MessagesModule { }
