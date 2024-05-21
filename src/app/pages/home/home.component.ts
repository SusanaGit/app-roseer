import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterModule,
        HeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title: string | undefined ;

  photo = "";
  name = "";
  variety = "";
  flowerColour = "";
  flowerScent = "";
  intensityFragrance = 0;
  flowerSize = 0;
  durabilityFlowers = 0;
  heightCm = 0;
  frostResistanceCelsius = 0;
  diseaseResistance = 0;
  waterRequirements = 0;
  sunExposure = 0;

  constructor() { }

  ngOnInit(): void {
    this.title = "Home";
  }
}
