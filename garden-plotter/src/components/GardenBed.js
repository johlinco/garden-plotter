import { useState } from 'react';
import './GardenBed.css';



export default function GardenBed() {

  const ROWS = 84
  const COLS = 48

  const PLANTS = {
    "tomato": {
      "spacing": 24,
    },
    "basil": {
      "spacing": 8,
    },
  }

  class Inch {
    constructor() {
      this.planted = false;
      this.plant = "";
      this.plantSpacing = 0;
      this.covered = false;
    }
  }

  const [bed, setBed] = useState(Array(ROWS * COLS).fill(new Inch))
  const [plant, setPlant] = useState(PLANTS["tomato"])

  function plantThePlant(index) {
    if (index % COLS < (plant.spacing / 2) 
      || index % COLS > COLS - (plant.spacing / 2)
      || index / COLS < (plant.spacing / 2)
      || index / COLS > ROWS - (plant.spacing / 2)) {
        //TODO ENTER ERROR CODE
    } else {
      let newBed = [...bed]
      let newPlantedValue = newBed[index].planted ? false : true
      newBed[index] = {
        ...newBed,
        planted: newPlantedValue,
      }
      setBed(newBed)
    }
  }

  return (
      <div className="container">
        <div className="bed">
          {bed.map((cell, index) => (
            <div
              onClick={() => plantThePlant(index)}
              key={index}
              className={`cell ${cell}`}
              style={{backgroundColor: cell.planted === false ? 'lightGreen' : 'brown'}}
            ></div>
          ))}
        </div>
      </div>
  )
}
