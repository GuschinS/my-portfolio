import { Component, OnInit } from '@angular/core';
import { LoadingProjectsService } from '../../services/loading-projects.service';
import { ProjectModel } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  cards!: ProjectModel[];

  constructor(private loadingProjects: LoadingProjectsService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.loadingProjects.getCard().subscribe((value) => {
      this.cards = value;
    });
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
  goToDetails(id: number) {
    console.log(id);
  }
}
