import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { imageUrlValidator } from '../../shared/utils/imageUrlValidator';
import { videoUrlValidator } from '../../shared/utils/videoUrlValidator';
import { gitUrlValidator } from '../../shared/utils/gitUrlValidator';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  animations: [fadeInRightOnEnterAnimation()],
})
export class AddProjectComponent {
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {}

  form = this.formBuilder.group({
    projectName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    technology: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    videoUrl: ['', [videoUrlValidator()]],
    gitHubRepo: ['', [gitUrlValidator()]],
  });

  addProject():void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.markAllAsTouched();
    });

    if (this.form.invalid) {
      return;
    }
    
    const { projectName, technology, description, imageUrl, videoUrl, gitHubRepo } = this.form.value;

    this.apiService.createProject(projectName!, technology!, description!, imageUrl!, videoUrl!, gitHubRepo!)
      .subscribe((newProject) => {
        console.log(newProject);
        this.router.navigate(["/content/projects"])
      });
  }

}
