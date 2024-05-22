import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RoseFormComponent} from "../../shared/components/rose-form/rose-form.component";
import {RosesService} from "../../services/roses.service";
import {IRose} from "../../model/interfaces";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-delete-roses',
  standalone: true,
  imports: [
    HeaderComponent,
    RoseFormComponent,
    NgForOf
  ],
  templateUrl: './delete-roses.component.html',
  styleUrl: './delete-roses.component.scss'
})
export class DeleteRosesComponent implements OnInit {
  rosesService = inject(RosesService);
  roses: IRose[] = [];
  title: string | undefined ;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.title = "Delete Roses";

    console.log("Initialize roses variable.");
    this.getRoses();
  }

  getRoses() {
    this.roses = this.rosesService.getRoses();
  }

  goToEdit(index: number) {
    console.log("Index selected rose to delete: ", index);
    this.router.navigate(['/delete', index]);
  }
}
