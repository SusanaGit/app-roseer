import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {IRose} from "../../../model/interfaces";

@Component({
  selector: 'app-rose-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './rose-form.component.html',
  styleUrl: './rose-form.component.scss'
})
export class RoseFormComponent {

  @Input() buttonName!: string;

  roseForm!: FormGroup;

  constructor() {
    console.log("Create roseForm.");
    this.createForm();
  }

  createForm() {
    this.roseForm = new FormGroup({
      photo: new FormControl("", [Validators.required]),
      name: new FormControl(""),
      variety: new FormControl("", [Validators.required]),
      flowerColour: new FormControl("", [Validators.required]),
      flowerScent: new FormControl(""),
      intensityFragrance: new FormControl(0, [Validators.required]),
      flowerSize: new FormControl(0),
      durabilityFlowers: new FormControl(0),
      heightCm: new FormControl(0),
      frostResistanceCelsius: new FormControl(0),
      diseaseResistance: new FormControl(0),
      waterRequirements: new FormControl(0),
      sunExposure: new FormControl(0)
    })
  }

  outputRose() {

    console.log(this.roseForm);
    if (this.roseForm.valid) {
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
    } else {
      console.error("INVALID!!!")
    }
  }
}
