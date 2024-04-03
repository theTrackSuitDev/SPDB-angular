import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllProjects(){
    return this.http.get<Project[]>("/api/themes");
  }

  createProject(projectName: string, technology: string, description: string, imageUrl: string, videoUrl: string, gitHubRepo: string) {
    const payload = { projectName, technology, description, imageUrl, videoUrl, gitHubRepo };

    return this.http.post<Project>("/api/themes", payload);
  }

  getProjectById(id: string) {
    return this.http.get<Project>(`/api/themes/${id}`);
  }

  editProjectById(id: string, projectName: string, technology: string, description: string, imageUrl: string, videoUrl: string, gitHubRepo: string) {

    const payload = { projectName, technology, description, imageUrl, videoUrl, gitHubRepo };

    return this.http.put<Project>(`/api/themes/${id}`, payload);
  }

  deleteProjectById(id: string) {
    return this.http.delete<Project>(`/api/themes/${id}`);
  }
  
}
