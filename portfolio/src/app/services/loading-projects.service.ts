import { Injectable } from '@angular/core';
import { Projects } from '../constants/projects.constant';
import { Observable, of } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class LoadingProjectsService {
  getCard(): Observable<ProjectModel[]> {
    return of(Projects);
  }
}
