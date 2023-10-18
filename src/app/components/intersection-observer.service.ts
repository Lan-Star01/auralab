import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  observe(element: Element): Observable<IntersectionObserverEntry> {
    return new Observable(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => observer.next(entry));
      });

      intersectionObserver.observe(element);
      return () => intersectionObserver.disconnect();
    });
  }
}
