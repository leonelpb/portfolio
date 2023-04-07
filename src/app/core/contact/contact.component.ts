import { Component , ViewChild, ElementRef,OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const contacto = document.getElementById('contacto');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (contacto) {
      const offsetTop = contacto.offsetTop - contacto.offsetHeight;
      if (scrollTop >= offsetTop) {
        const posicion = -((scrollTop - offsetTop) * 0.20);
        contacto.style.backgroundPosition = `0 ${posicion}px`;
      }
    }
  }
  }



