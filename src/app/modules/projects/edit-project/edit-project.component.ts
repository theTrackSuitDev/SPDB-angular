import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { imageUrlValidator } from '../../shared/utils/imageUrlValidator';
import { videoUrlValidator } from '../../shared/utils/videoUrlValidator';
import { gitUrlValidator } from '../../shared/utils/gitUrlValidator';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/types/project';
import { UserService } from 'src/app/services/user.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  animations: [fadeInRightOnEnterAnimation()]
})
export class EditProjectComponent implements OnInit{
  project: Project = {} as Project;
  isLoading: boolean = true;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {}

  get userId(): string {
    return this.userService.user?._id || '';
  }

  form = this.formBuilder.group({
    projectName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    technology: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    videoUrl: ['', [videoUrlValidator()]],
    gitHubRepo: ['', [gitUrlValidator()]],
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      const projectId = data['projectId'];

      this.apiService.getProjectById(projectId).subscribe(data => {
        this.project = data;
        this.isLoading = false;

        if (this.project === null) {        
          this.router.navigate(["/404"]);
          return;
        }

        if (this.userId != this.project.userId._id) { 
          this.router.navigate(["/"]);
          return;
        }
        
        this.form.controls['projectName'].setValue(this.project.projectName);
        this.form.controls['technology'].setValue(this.project.technology);
        this.form.controls['description'].setValue(this.project.description);
        this.form.controls['imageUrl'].setValue(this.project.imageUrl);
        this.form.controls['videoUrl'].setValue(this.project.videoUrl);
        this.form.controls['gitHubRepo'].setValue(this.project.gitHubRepo);

        const defaultValue = this.form.value;
        this.form.valueChanges
          .pipe(debounceTime(200))
          .subscribe(value => {
          if (JSON.stringify(defaultValue) == JSON.stringify(value)) {
            this.form.markAsPristine();
          }
        });
        
      });
    });
  }

  editProject():void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.markAllAsTouched();
    });

    if (this.form.invalid || this.form.pristine) {
      return;
    }

    this.activatedRoute.params.subscribe(data => {
      const projectId = data['projectId'];
      const { projectName, technology, description, imageUrl, videoUrl, gitHubRepo } = this.form.value;

      this.apiService.editProjectById(projectId!, projectName!, technology!, description!, imageUrl!, videoUrl!, gitHubRepo!)
      .subscribe((newProject) => {
        this.router.navigate([`/content/projects/${projectId}`]);
      });
    });
  }
}
