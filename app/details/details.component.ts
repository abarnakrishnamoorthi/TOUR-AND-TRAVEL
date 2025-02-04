import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../training/training.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.getEntries().subscribe(response => {
      this.data = response;
    });
  }
}
