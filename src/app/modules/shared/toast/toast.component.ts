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
        this.errorMessage = error.message;
      }
      
    });
  }

}
