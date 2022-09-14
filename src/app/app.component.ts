import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formR!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formR = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        lastName: '',
        country: ''
      }
    )

  }
}
