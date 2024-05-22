import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RosesService} from "../../services/roses.service";
import {IRose} from "../../model/interfaces";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {

  rosesService = inject(RosesService);
  rose!: IRose | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("Id selected rose: ", params['id']);
      this.rose = this.rosesService.getRoseByIndex(params['id']);
      console.log("Selected rose: ", this.rose);
    })
  }
}
