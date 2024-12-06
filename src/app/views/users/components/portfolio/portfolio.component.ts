import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],  // No need to import RouterLink here when using router.navigate()
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']  // Corrected to styleUrls (plural)
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
