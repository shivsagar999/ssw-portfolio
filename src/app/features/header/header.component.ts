import { ViewportScroller } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(viewportScroller: ViewportScroller, element: ElementRef<HTMLElement>) {
    viewportScroller.setOffset(() => [0, element.nativeElement.offsetHeight + 16]);
  }
}
