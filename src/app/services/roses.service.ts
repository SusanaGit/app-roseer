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
    this.saveRoses(roses);
  }

  saveChangesRose(index: number, modified_rose: IRose) {
    const roses = this.getRoses();
    roses[index] = modified_rose;
    this.saveRoses(roses);
  }

  private saveRoses(roses: IRose[]) {
    window.localStorage.setItem('roses', JSON.stringify(roses))
  }

  getRoseByIndex(index: number) {
    const roses = this.getRoses();

    if (index >= 0 && index < roses.length) {
      return roses[index];
    } else {
      console.error(`Index ${index} is out of bounds for roses array.`);
      return undefined;
    }
  }
}
