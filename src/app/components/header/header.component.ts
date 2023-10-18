import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // isHome!: boolean;

  // constructor(private route: ActivatedRoute, private router: Router, private activatedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.router.events
  //   .pipe(filter((event) => event instanceof NavigationEnd))
  //   .subscribe(() => {
  //     this.isHome = this.router.url === '/';
  //   });
  // }

  // private extractIsHomeFromRoute(route: ActivatedRouteSnapshot): boolean {
  //   return route.firstChild?.data?.['isHome'] || false;
  // }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateTextColor();
      }
    });
  }

  private updateTextColor() {
    const currentRoute = this.router.url;

    const routesWithCustomColor = ['/about', '/projects', '/services', '/news', '/stories', '/contact'];

    const shouldChangeColor = routesWithCustomColor.includes(currentRoute);

    const navigationLinks = document.querySelectorAll('a');
    navigationLinks.forEach((link) => {
      if (shouldChangeColor) {
        link.classList.add('custom-text-color');
      } else {
        link.classList.remove('custom-text-color');
      }
    });
  }
}
