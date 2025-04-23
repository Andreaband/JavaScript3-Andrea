import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-navbar',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDropdownOpen = false;
  isSearchOpen = false;
  isLoginOpen = false;
  isCheckoutOpen = false;

  searchQuery = '';
  loginData = { email: '', password: '' };

  products = [
    { id: 1, name: 'Bari Cup' },
    { id: 2, name: 'Ceramic Mug' },
    { id: 3, name: 'Handmade Cup' },
    { id: 4, name: 'Rustic Cup' },
    { id: 5, name: 'Napoli Cup' },
    { id: 6, name: 'Milano Cup' }
  ];

  constructor(private router: Router) {}

  handleSearchSubmit(): void {
    const foundProduct = this.products.find(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.isSearchOpen = false;

    if (foundProduct) {
      this.router.navigate(['/product', foundProduct.id]);
    } else {
      this.router.navigate(['/shop'], {
        queryParams: { search: this.searchQuery }
      });
    }
  }
}
