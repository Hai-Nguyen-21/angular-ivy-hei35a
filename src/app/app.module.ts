import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthorDetailComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorListComponent,
    AuthorDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
