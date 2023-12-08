import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // comp. must be imported here!!!
import { ServerComponent } from './server/server.component'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
	ServerComponent,
 ServersComponent // Components must be declared here!!!
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
