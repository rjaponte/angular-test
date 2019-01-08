import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
// import {} from './';

const routes: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full'},
  { path: 'messages', loadChildren: './messages/messages.module#MessagesModule' },
  { path: '', component: ToolbarComponent, outlet: 'toolbar' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
