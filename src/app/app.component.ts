import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employeeForm: FormGroup;
  fullNameLength = 0;
  validationMessages: any = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 3 characters.',
      'maxlength': 'Full Name must be less than 20 characters.',
    },
    'email': {
      'required': 'Email is required.',
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required:': 'Proficiency is required.',
    },
  };
  formErrors:any = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'experiencyInYears': '',
    'proficiency': '',
  };


  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({});

  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', Validators.required],
      // create skills form group
      skills: this.formBuilder.group({
        skillName: ['', Validators.required],
        experienceInYear: ['', Validators.required],
        proficiency: ['', Validators.required],
      })
    });

    
  }

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key:string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this
        this.formErrors[key] ='';
        if (abstractControl && !abstractControl.valid) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }

        }
      }
    });
  }

  onLoadDataClick() {
    this.logValidationErrors(this.employeeForm);
    console.log(this.formErrors);
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }
 

}





