import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:id', component: DetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    ItemsComponent,
    ItemComponent,
    HomePageComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
