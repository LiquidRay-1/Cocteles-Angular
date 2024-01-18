// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CocktailService } from './services/cocktail.service';
import { BlueComponent } from './components/blue/blue.component';
import { TommysComponent } from './components/tommys/tommys.component';

const routes: Routes = [
  { path: 'blue', component: BlueComponent },
  { path: 'tommys', component: TommysComponent },
  { path: '', redirectTo: 'blue', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, BlueComponent, TommysComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [CocktailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
