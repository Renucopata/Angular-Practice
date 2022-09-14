import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
  this.colorControl.valueChanges.subscribe(value => {
    console.log('VALUE CHANGES: ', value)
  })
}
onSubmit(form:any){
  console.log('FORM: ', form)
}

printColorControl(){
  console.log(this.colorControl)
}

sendPerson(){console.log('REACTIVE FORM: ', this.personForm)}
disableName(){this.personForm.get('name')?.disable();}
enableName(){this.personForm.get('name')?.enable()}
}