import { Component, OnInit } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  standalone: true,
  imports: [NgbToastModule, NgIf]
})
export class ToastComponent  implements OnInit{
  constructor(private errorService: ErrorService) {}

  isError = false;
  errorMessage = "An error has occurred!";

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((error: any) => {
      if (error) {
        this.isError = true;
        if (error.error.err) {
          this.errorMessage = error.error.err.message;
        } else if (error.error) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = error.message;
        }
        
      }
      
    });
  }

}
