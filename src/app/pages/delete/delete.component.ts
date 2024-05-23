import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RoseFormComponent} from "../../shared/components/rose-form/rose-form.component";
import {RosesService} from "../../services/roses.service";
import {IRose} from "../../model/interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    HeaderComponent,
    RoseFormComponent
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit {
  rosesService = inject(RosesService);
  rose!: IRose | undefined;
  buttonName = "Delete Rose";
  index!: number;
  title: string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private route: Router){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.title = "Delete Rose";
      this.index = params['id'];
      console.log("Id selected rose: ", this.index);
      this.rose = this.rosesService.getRoseByIndex(this.index);
      console.log("Selected rose: ", this.rose);
    })
  }

  deleteRose(rose: IRose) {

    console.log("Deleting rose: ", rose)

    try {
      this.rosesService.deleteRose(this.index, rose);
      this.route.navigate(['/home']);
    } catch (error) {
      console.error("Error deleting rose: ", error)
    }
  }
}
