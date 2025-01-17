import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private authservice: Authentication
  ) {}

  ngOnInit(): void {
    // Listen for fragment changes and scroll to the fragment
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }

  logout(): void {
    this.authservice.logout();
  }
}
