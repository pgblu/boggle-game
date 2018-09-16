import { dice } from './dictionary.js';

const shuffle = (arr) => {
  return arr.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, [])
}

export default function BoardPopulator() {
  let dice_array = shuffle(dice);
  console.log(dice_array[0]);
  console.log(dice_array.length);
  let result = [];
  for (let i=0; i < 6; i++) {
    result.push([]);
    let counter = i * 6;
    for (let j=0; j < 6; j++) {
      let die = dice_array[counter + j];
      let face = Math.floor(Math.random() * 6);
      result[i].push(die[face]);
    }
  }
  return result;
}
