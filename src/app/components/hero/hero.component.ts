import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', '../../developer.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  window = window;

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef<HTMLSpanElement>; // Reference to the HTML element
  typed: Typed | undefined; // To hold the Typed.js instance

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: [
        "Front-End Engineer.",
        "Web Developer.",
        "UI / UX Developer.",
        "Passionate Coder."
      ],
      typeSpeed: 75,       // Typing speed in milliseconds
      backSpeed: 50,       // Backspacing speed in milliseconds
      backDelay: 1500,     // Time before backspacing in milliseconds
      startDelay: 500,     // Time before typing starts in milliseconds
      loop: true,          // Loop indefinitely
      showCursor: true,    // Show the blinking cursor
      cursorChar: '|',     // Character for the cursor
      smartBackspace: true, // Only backspace what doesn't match the previous string
    };

    // Initialize Typed.js instance
    this.typed = new Typed(this.typedElement.nativeElement, options);
  }

  ngOnDestroy(): void {
    // Destroy Typed.js instance to prevent memory leaks when the component is destroyed
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
