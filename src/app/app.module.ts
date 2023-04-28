import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentToolsComponent } from './components/agent-tools/agent-tools.component';
import { HomeComponent } from './components/home/home.component';
import { LeadsComponent } from './components/leads/leads.component';
import { HouseholdsComponent } from './components/households/households.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { FormsModule } from '@angular/forms';
import { MouseScrollEventDirective } from './directives/mouse-scroll-event.directive';
@NgModule({
  declarations: [
    AppComponent,
    AgentToolsComponent,
    HomeComponent,
    LeadsComponent,
    HouseholdsComponent,
    OpportunitiesComponent,
    MouseScrollEventDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatMenuModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
