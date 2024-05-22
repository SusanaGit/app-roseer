import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RoseFormComponent} from "../../shared/components/rose-form/rose-form.component";
import {IRose} from "../../model/interfaces";
import {RosesService} from "../../services/roses.service";
import {Router} from "@angular/router";

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
  buttonName="Register New Rose";

  constructor(private route: Router) {
  }


  ngOnInit(): void {
    this.title = "Register New Rose";
  }

  getRoses() {
    this.roses = this.rosesService.getRoses();
  }

  saveRose(rose: IRose) {

    console.log("Register new rose: ", rose)

    try {
      this.rosesService.setRose(rose);
      this.route.navigate(['/home']);
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
