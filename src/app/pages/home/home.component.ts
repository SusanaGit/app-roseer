import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
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
  buttonName="Save";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.title = "Home";

    console.log("Initialize the roses variable.");
    this.getRoses();
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

  goToEdit(index: number) {
    console.log("Index selected rose: ", index);
    this.router.navigate(['/edit', index]);
  }
}
