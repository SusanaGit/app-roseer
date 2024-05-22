import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NgForOf} from "@angular/common";
import {RosesService} from "../../services/roses.service";
import {IRose} from "../../model/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-rose',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './modify-rose.component.html',
  styleUrl: './modify-rose.component.scss'
})
export class ModifyRoseComponent implements OnInit {

  rosesService = inject(RosesService);
  roses: IRose[] = [];
  title: string | undefined ;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.title = "Modify Roses";

    console.log("Initialize the roses variable.");
    this.getRoses();
  }

  getRoses() {
    this.roses = this.rosesService.getRoses();
  }

  goToEdit(index: number) {
    console.log("Index selected rose: ", index);
    this.router.navigate(['/edit', index]);
  }

}
