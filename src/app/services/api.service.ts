import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllProjects(){
    const { apiUrl } = environment;
    return this.http.get<Project[]>(`${environment.apiUrl}/themes`);
  }

  createProject(projectName: string, technology: string, description: string, imageUrl: string, videoUrl: string) {
    const { apiUrl } = environment;
    const payload = { projectName, technology, description, imageUrl, videoUrl };

    return this.http.post<Project>(`${apiUrl}/themes`, payload);
  }
}
