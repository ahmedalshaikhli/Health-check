import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  patientAge: string;
  patientSex: string;
  homeCode: string;
  areaCode: string;
/*   switchCaseResult: string; // Variable to store the result */
  recommendations: any[] = [];

  constructor(private router: Router,private http: HttpClient) {}


  // Call the function with sample values for the parameters
  onFormSubmit() {
    // Call the API to fetch matched values
    const apiUrl = `https://localhost:5001/api/senarios/recommendations/${this.patientAge}/${this.patientSex}/${this.homeCode}/${this.areaCode}`;
    this.http.get<string[]>(apiUrl).subscribe(
      (response) => {
        // Update component property with matched values
        console.log(response)
        this.recommendations = response;
      /*   this.router.navigate(['/displayResult']); */
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
