import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkAuthentication();
      }
    });
  }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    const authStatus = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = authStatus === 'true';
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
