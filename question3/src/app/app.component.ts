import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive.form';
   form : FormGroup;
  

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      nom: ['', [Validators.required]],
      numRue: ['',[Validators.required]],
      rue: ['',[Validators.required]],
      codePostal: ['',[Validators.required]],
      commentaire: ['',[Validators.required]],
    });
    
  }
}


