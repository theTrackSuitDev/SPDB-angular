import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { imageUrlValidator } from '../../shared/utils/imageUrlValidator';
import { videoUrlValidator } from '../../shared/utils/videoUrlValidator';
import { gitUrlValidator } from '../../shared/utils/gitUrlValidator';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    projectName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    technology: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    videoUrl: ['', [videoUrlValidator()]],
    gitHubRepo: ['', [gitUrlValidator()]],
  });

  editProject():void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.markAllAsTouched();
    });

    if (this.form.invalid) {
      return;
    }
    
    console.log(this.form.value);   
  }
}
