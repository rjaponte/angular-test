import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatSlideToggleModule } from '@angular/material';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingListComponent } from './setting-list/setting-list.component';

@NgModule({
  declarations: [SettingListComponent],
  imports: [
    MatListModule,
    MatSlideToggleModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
