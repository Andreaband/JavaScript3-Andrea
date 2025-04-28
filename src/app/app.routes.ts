// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { ProductDetailComponent } from './route/product-detail/product-detail.component';
import { AboutComponent } from './route/about/about.component';
import { AdminComponent } from './route/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent }

];
