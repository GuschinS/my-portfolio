import { Component, OnInit } from '@angular/core';
import { IdOfSelectCardService } from 'src/app/services/id-of-select-card.service';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
})
export class DescriptionsComponent implements OnInit {
  constructor(private idOfSelectCardService: IdOfSelectCardService) {}
  card!: ProjectModel;
  id: number = 0;
  ngOnInit() {
    this.idOfSelectCardService.id.subscribe((value) => {
      this.id = value;
    });
    this.idOfSelectCardService.getCardById(this.id).subscribe((value) => {
      if (value) {
        this.card = value;
      }
    });
  }
}
