import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true, // ⬅️ Aggiungi questo
  imports: [CommonModule, RouterModule], // ⬅️ E importa CommonModule
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/products')
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error loading products';
          this.loading = false;
        }
      });
  }

  deleteProduct(id: number) {
    if (confirm('Sei sicuro di voler eliminare questo prodotto?')) {
      this.http.delete(`http://localhost:3000/api/products/${id}`)
        .subscribe({
          next: () => {
            this.products = this.products.filter(p => p.id !== id);
          },
          error: () => {
            this.error = 'Errore durante l\'eliminazione del prodotto';
          }
        });
    }
  }


}


