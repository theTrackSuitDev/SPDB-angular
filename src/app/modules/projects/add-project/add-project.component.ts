import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { imageUrlValidator } from '../../shared/utils/imageUrlValidator';
import { videoUrlValidator } from '../../shared/utils/videoUrlValidator';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  animations: [fadeInRightOnEnterAnimation()],
})
export class AddProjectComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    projectName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    technology: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    videoUrl: ['', [videoUrlValidator()]],
    gitHubRepo: ['', [Validators.required, Validators.pattern(/^https?:\/\/github\.com\//)]],
  });

  addProject():void {
    if (this.form.invalid) {
      return;
    }
    
    console.log(this.form.value);   
  }

}
