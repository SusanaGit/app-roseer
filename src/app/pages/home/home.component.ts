import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {IRose} from "../../model/interfaces";
import {RosesService} from "../../services/roses.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  rosesService = inject(RosesService);

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

  saveRose() {

    const rose: IRose = {
      photo: this.photo,
      name: this.name,
      variety: this.variety,
      flowerColour: this.flowerColour,
      flowerScent: this.flowerScent,
      intensityFragrance: this.intensityFragrance,
      flowerSize: this.flowerSize,
      durabilityFlowers: this.durabilityFlowers,
      heightCm: this.heightCm,
      frostResistanceCelsius: this.frostResistanceCelsius,
      diseaseResistance: this.diseaseResistance,
      waterRequirements: this.waterRequirements,
      sunExposure: this.sunExposure
    }

    console.log("Saving rose: ", rose)

    try {
      this.rosesService.setRose(rose);
    } catch (error) {
      console.error("Error saving rose: ", error)
    }
  }
}
