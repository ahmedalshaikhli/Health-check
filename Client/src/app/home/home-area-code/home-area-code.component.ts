import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-area-code',
  templateUrl: './home-area-code.component.html',
  styleUrls: ['./home-area-code.component.scss']
})
export class HomeAreaCodeComponent implements OnInit {
  patientAge: string;
  patientSex: string;
  homeCode: string;
  areaCode: string;
  senario: any[] = [];
 


  ngOnInit() {
    // Fetch saved form submit values from localStorage
    const formSubmitValuesString = localStorage.getItem('formSubmitValues');
    if (formSubmitValuesString !== null) {
      const formSubmitValues = JSON.parse(formSubmitValuesString);
      // Use the saved values to fetch data or update component properties as needed
      const { patientAge, patientSex, homeCode, areaCode, senario} = formSubmitValues;
      // Assign the retrieved values to component properties
      this.patientAge = patientAge;
      this.patientSex = patientSex;
      this.homeCode = homeCode;
      this.areaCode = areaCode;
      this.senario = senario;
    }
  }
}
