import { Component, OnInit } from '@angular/core';
import { LoadingProjectsService } from 'src/app/services/loading-projects.service';
import { ProjectModel } from 'src/app/models/project.model';
import { IdOfSelectCardService } from 'src/app/services/id-of-select-card.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  cards!: ProjectModel[];

  constructor(
    private loadingProjects: LoadingProjectsService,
    private idOfSelectCardService: IdOfSelectCardService
  ) {}

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
  goToDetails = (id: number) => {
    this.idOfSelectCardService.id.next(id);
  };
}
