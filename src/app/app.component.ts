import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./route/navbar/navbar.component";
import { RouterModule } from '@angular/router'
import { FooterComponent } from "./route/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JavaScript3-Andrea';
}
