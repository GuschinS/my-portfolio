import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Projects } from '../constants/projects.constant';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class IdOfSelectCardService {
  public id = new BehaviorSubject<number>(0);

  getCardById(id: number): Observable<ProjectModel | undefined> {
    const project = Projects.find((item) => item.id === id);
    return of(project);
  }
}
