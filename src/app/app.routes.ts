// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { ProductDetailComponent } from './route/product-detail/product-detail.component';

export const routes: Routes = [  // ⬅️ questo è quello che mancava
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];
