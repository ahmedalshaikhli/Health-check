import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrls: ['./risk-profile.component.scss']
})
export class RiskProfileComponent {
  patientAge: string;
  patientSex: string;
  homeCode: string;
  areaCode: string;
/*   switchCaseResult: string; // Variable to store the result */
  senario: any[] = [];

  

  constructor(private router: Router,private http: HttpClient) {}



  // Call the function with sample values for the parameters
  onFormSubmit() {
    // Call the API to fetch matched values
    const apiUrl = `https://localhost:5001/api/senarios/senario/${this.patientAge}/${this.patientSex}/${this.homeCode}/${this.areaCode}`;
    this.http.get<string[]>(apiUrl).subscribe(
      (response) => {
        // Update component property with matched values
        
        this.senario = response;

        console.log(this.senario)
  
        // Save form submit values and API response in localStorage
        localStorage.setItem('formSubmitValues', JSON.stringify({
          patientAge: this.patientAge,
          patientSex: this.patientSex,
          homeCode: this.homeCode,
          areaCode: this.areaCode,
          senario: response // assuming 'recommendations' is the property that holds the API response
        }));
  
      this.router.navigate(['/home']); 
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
