import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RosesService} from "../../services/roses.service";
import {IRose} from "../../model/interfaces";
import {NgForOf} from "@angular/common";
import {RoseFormComponent} from "../../shared/components/rose-form/rose-form.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    NgForOf,
    RoseFormComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {

  rosesService = inject(RosesService);
  rose!: IRose | undefined;
  buttonName = "Save Changes";

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("Id selected rose: ", params['id']);
      this.rose = this.rosesService.getRoseByIndex(params['id']);
      console.log("Selected rose: ", this.rose);
    })
  }

  saveChangesRose(rose: IRose) {

    console.log("Saving changes to rose: ", rose)

    try {
      this.rosesService.setRose(rose);
    } catch (error) {
      console.error("Error saving rose: ", error)
    }
  }

}
