import { dice } from './dictionary.js';

const FACES = 6; //number of faces on each die

function shuffle(arr) {
  return arr.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, [])
}

export default function BoardPopulator(width) {
  let diceArray = shuffle(dice[width]);
  let result = [];
  for (let i=0; i < width; i++) {
    result.push([]);
    let counter = i * width;
    for (let j=0; j < width; j++) {
      let die = diceArray[counter + j];
      let face = Math.floor(Math.random() * FACES);
      result[i].push(die[face]);
    }
  }
  return result;
}
