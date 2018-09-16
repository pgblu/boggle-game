import { dice } from './dictionary.js';

const FACES = 6; //number of FACES on each die
const shuffle = (arr) => {
  return arr.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, [])
}

export default function BoardPopulator(width) {
  let dice_array = shuffle(dice[width]);
  let result = [];
  for (let i=0; i < width; i++) {
    result.push([]);
    let counter = i * width;
    for (let j=0; j < width; j++) {
      let die = dice_array[counter + j];
      let face = Math.floor(Math.random() * FACES);
      result[i].push(die[face]);
    }
  }
  return result;
}
