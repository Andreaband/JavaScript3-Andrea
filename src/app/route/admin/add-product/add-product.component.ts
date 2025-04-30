import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    description: '',
    image_url: '',
    price: 0
  };

  constructor(private http: HttpClient, private router: Router) {}

  submit() {
    console.log('Invio prodotto:', this.product);

    this.http.post('http://localhost:3000/api/products', this.product).subscribe({
      next: () => {
        alert('Prodotto salvato!');
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.error('Errore salvataggio:', err);
        alert('Errore nel salvataggio');
      }
    });
  }
}
