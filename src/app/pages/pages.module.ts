import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-setings.component';
import { PromesasComponent } from './promesas/promesas.component';

const routes: Routes = [{path: '', }];

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
