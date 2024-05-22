import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RoseFormComponent} from "../../shared/components/rose-form/rose-form.component";
import {IRose} from "../../model/interfaces";
import {RosesService} from "../../services/roses.service";

@Component({
  selector: 'app-new-rose',
  standalone: true,
  imports: [
    HeaderComponent,
    RoseFormComponent
  ],
  templateUrl: './new-rose.component.html',
  styleUrl: './new-rose.component.scss'
})
export class NewRoseComponent implements OnInit {

  title: string | undefined ;
  rosesService = inject(RosesService);
  roses: IRose[] = [];
  buttonName="Save New Rose";

  ngOnInit(): void {
    this.title = "Register New Rose";
  }

  getRoses() {
    this.roses = this.rosesService.getRoses();
  }

  saveRose(rose: IRose) {

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
