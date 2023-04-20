import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent {

  result: string;
  @Input() recommendations: any[]; 

  constructor(private route: ActivatedRoute, private location: Location) {}


  goBack(): void {
    // Use the location service to navigate back to the previous location
    this.location.back();
  }
}
