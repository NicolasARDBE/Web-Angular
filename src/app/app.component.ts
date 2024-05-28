import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'WebAngular';
  isAuthenticated = false;
  userType: string | undefined;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.authChange$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        const user = localStorage.getItem('user');
        if (user) {
          const parsedUser = JSON.parse(user);
          this.userType = parsedUser.tipo;
        }
      } else {
        this.userType = undefined;
      }
      console.log('Usuario autenticado, tipo:', this.userType);
    });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userType = parsedUser.tipo;
      this.isAuthenticated = true;
      console.log('Usuario autenticado, tipo:', this.userType);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
