import { Injectable } from '@angular/core';
import {IRose} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class RosesService {

  roses: IRose[] = [
    {
      photo: 'https://img.pharmarosa.com/m/109/ori/f/02-004-1.webp',
      name: 'Peace',
      variety: 'Hybrid Tea',
      flowerColour: 'Yellow/Pink',
      flowerScent: 'Sweet',
      intensityFragrance: 8,
      flowerSize: 12,
      durabilityFlowers: 10,
      heightCm: 150,
      frostResistanceCelsius: -10,
      diseaseResistance: 8,
      waterRequirements: 7,
      sunExposure: 6
    },
    {
      photo: 'https://img.pharmarosa.com/m/556/ori/f/02-036-1.webp',
      name: 'Mister Lincoln',
      variety: 'Hybrid Tea',
      flowerColour: 'Red',
      flowerScent: 'Strong',
      intensityFragrance: 10,
      flowerSize: 14,
      durabilityFlowers: 12,
      heightCm: 180,
      frostResistanceCelsius: -15,
      diseaseResistance: 7,
      waterRequirements: 6,
      sunExposure: 8
    },
    {
      photo: 'https://img.pharmarosa.com/m/1568/ori/f/90-211-1.webp',
      name: 'Iceberg',
      variety: 'Floribunda',
      flowerColour: 'White',
      flowerScent: 'Mild',
      intensityFragrance: 5,
      flowerSize: 10,
      durabilityFlowers: 8,
      heightCm: 120,
      frostResistanceCelsius: -20,
      diseaseResistance: 9,
      waterRequirements: 6,
      sunExposure: 7
    },
    {
      photo: 'https://img.pharmarosa.com/m/528/ori/f/04-016-1.webp',
      name: 'Graham Thomas',
      variety: 'English Rose',
      flowerColour: 'Yellow',
      flowerScent: 'Tea',
      intensityFragrance: 7,
      flowerSize: 13,
      durabilityFlowers: 11,
      heightCm: 140,
      frostResistanceCelsius: -18,
      diseaseResistance: 8,
      waterRequirements: 5,
      sunExposure: 8
    },
    {
      photo: 'https://img.pharmarosa.com/m/260/ori/f/02-019-1.webp',
      name: 'Double Delight',
      variety: 'Hybrid Tea',
      flowerColour: 'Red/White',
      flowerScent: 'Spicy',
      intensityFragrance: 9,
      flowerSize: 12,
      durabilityFlowers: 9,
      heightCm: 160,
      frostResistanceCelsius: -12,
      diseaseResistance: 6,
      waterRequirements: 7,
      sunExposure: 7
    },
    {
      photo: 'https://img.pharmarosa.com/m/673/ori/f/02-058-1.webp',
      name: 'Queen Elizabeth',
      variety: 'Grandiflora',
      flowerColour: 'Pink',
      flowerScent: 'Mild',
      intensityFragrance: 6,
      flowerSize: 11,
      durabilityFlowers: 10,
      heightCm: 170,
      frostResistanceCelsius: -15,
      diseaseResistance: 7,
      waterRequirements: 6,
      sunExposure: 8
    },
    {
      photo: 'https://img.pharmarosa.com/m/586/ori/f/52-809-1.webp',
      name: 'New Dawn',
      variety: 'Climbing Rose',
      flowerColour: 'Pale Pink',
      flowerScent: 'Fruity',
      intensityFragrance: 7,
      flowerSize: 14,
      durabilityFlowers: 13,
      heightCm: 300,
      frostResistanceCelsius: -15,
      diseaseResistance: 8,
      waterRequirements: 6,
      sunExposure: 9
    }
  ];

  constructor() {
    console.log("RosesService initialized.")
    this.saveRoses(this.roses);
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

  deleteRose(index: number, rose_delete: IRose) {
    const roses = this.getRoses();
    console.log("Deleting rose: ", rose_delete);
    roses.splice(index,1);
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
