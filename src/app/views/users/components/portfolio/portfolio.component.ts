import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    // Initialize the carousel after the view has been initialized
    const carouselElement = document.getElementById('carouselExampleDark');
    
    if (carouselElement) {
      // Bootstrap carousel initialization
      new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 3000,  // Set the interval for automatic sliding
        ride: 'carousel', // Make the carousel start automatically
        touch: true,  // Enable touch/swiping on mobile devices
      });
    }
  }
}
