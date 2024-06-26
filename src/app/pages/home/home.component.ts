import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {IRose} from "../../model/interfaces";
import {RosesService} from "../../services/roses.service";
import {NgFor, NgOptimizedImage} from "@angular/common";
import {RoseFormComponent} from "../../shared/components/rose-form/rose-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    NgFor,
    NgOptimizedImage,
    RoseFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  rosesService = inject(RosesService);
  roses: IRose[] = [];
  title: string | undefined ;


  constructor() {
  }

  ngOnInit(): void {
    this.title = "List of Roses";

    console.log("Initialize the roses variable.");
    this.getRoses();
  }

  getRoses() {
    this.roses = this.rosesService.getRoses();
  }
}
