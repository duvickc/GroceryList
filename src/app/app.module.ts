import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ListItemComponent } from './grocery-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GroceryListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
