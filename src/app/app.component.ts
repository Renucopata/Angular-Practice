import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  public colorControl = new FormControl('');
  public personForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.personForm = this.formBuilder.group({
      name: '',
      lastName: '',
      age: 0,
      country: ''
    });

  }
  ngOnInit() {
   
  }
  onSubmit(form:any){console.log('FORM: ', form)}

}