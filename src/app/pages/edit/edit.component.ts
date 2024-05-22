import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  index!: number;

  constructor(private activatedRoute: ActivatedRoute, private route: Router){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.index = params['id'];
      console.log("Id selected rose: ", this.index);
      this.rose = this.rosesService.getRoseByIndex(this.index);
      console.log("Selected rose: ", this.rose);
    })
  }

  saveChangesRose(rose: IRose) {

    console.log("Saving changes to rose: ", rose)

    try {
      this.rosesService.saveChangesRose(this.index, rose);
      this.route.navigate(['/home']);
    } catch (error) {
      console.error("Error saving rose: ", error)
    }
  }
}
