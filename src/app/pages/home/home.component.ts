import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {IRose} from "../../model/interfaces";
import {RosesService} from "../../services/roses.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FormsModule,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  rosesService = inject(RosesService);

  roses: IRose[] = [];

  title: string | undefined ;

  roseForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.title = "Home";

    console.log("Initialize the roses variable.");
    this.getRoses();

    console.log("Create roseForm.");
    this.createForm();
  }

  getRoses() {
    this.roses = this.rosesService.getRoses();
  }

  createForm() {
    this.roseForm = new FormGroup({
      photo: new FormControl(""),
      name: new FormControl(""),
      variety: new FormControl(""),
      flowerColour: new FormControl(""),
      flowerScent: new FormControl(""),
      intensityFragrance: new FormControl(0),
      flowerSize: new FormControl(0),
      durabilityFlowers: new FormControl(0),
      heightCm: new FormControl(0),
      frostResistanceCelsius: new FormControl(0),
      diseaseResistance: new FormControl(0),
      waterRequirements: new FormControl(0),
      sunExposure: new FormControl(0)
    })
  }

  saveRose() {

    console.log(this.roseForm);

    const rose: IRose = {
      photo: this.roseForm.get("photo")?.value,
      name: this.roseForm.get("name")?.value,
      variety: this.roseForm.get("variety")?.value,
      flowerColour: this.roseForm.get("flowerColour")?.value,
      flowerScent: this.roseForm.get("flowerScent")?.value,
      intensityFragrance: this.roseForm.get("intensityFragrance")?.value,
      flowerSize: this.roseForm.get("flowerSize")?.value,
      durabilityFlowers: this.roseForm.get("durabilityFlowers")?.value,
      heightCm: this.roseForm.get("heightCm")?.value,
      frostResistanceCelsius: this.roseForm.get("frostResistanceCelsius")?.value,
      diseaseResistance: this.roseForm.get("diseaseResistance")?.value,
      waterRequirements: this.roseForm.get("waterRequirements")?.value,
      sunExposure: this.roseForm.get("sunExposure")?.value
    }

    console.log("Saving rose: ", rose)

    try {
      this.rosesService.setRose(rose);
    } catch (error) {
      console.error("Error saving rose: ", error)
    }

    try {
      this.getRoses();
    } catch (error) {
      console.error("Error showing list of roses.")
    }
  }
}
