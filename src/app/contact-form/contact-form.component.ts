import { Component, isStandalone,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule } from "@angular/forms";

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  popup = false;

    firstName: string = "";
    lastName: string = "";
    email: string = "";
    country: string = "";
    message: string = "";

  validate(){
    this.popup = true;
  }

}
