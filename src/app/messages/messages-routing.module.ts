import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
    { path: '', component: MessageListComponent}
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule],
    providers: [],
})
export class MessagesRoutingModule {}
