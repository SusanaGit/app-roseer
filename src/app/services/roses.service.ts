import { Injectable } from '@angular/core';
import {IRose} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class RosesService {

  constructor() {
    console.log("RosesService initialized.")
  }

  getRoses(): IRose[] {

    const roses = window.localStorage.getItem("roses");

    if (roses) {
      console.log("Roses isn't null.");
      const parsedRoses = JSON.parse(roses);
      return parsedRoses;
    } else {
      console.log("Roses is null.")
      return [];
    }
  }

  setRose(rose: IRose) {
    const roses = this.getRoses();

    console.log("Adding new rose: ", rose);

    roses.push(rose);
    window.localStorage.setItem("roses", JSON.stringify(roses))
  }

}
