import loremIpsum from 'lorem-ipsum';

const shuffle = (arr1) => {
  return arr1.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, [])
}

export default function BoardPopulator(...dimensions) {
  const number_of_rows = dimensions[0];
  const number_of_tiles_per_row = dimensions[1];
  const total_tiles = dimensions.reduce((acc,curr) => acc * curr)
  let sample = [];
  let sample_text = loremIpsum({
    count: 15,
    units: 'paragraphs',
    format: 'plain'
  });
  sample = sample_text.replace(/[A-Z,. ]/g,'');
  let start = sample.indexOf('e');
  sample = sample.substr(start, start + (total_tiles)).split("");
  sample = shuffle(sample);
  let result = []
  for (let i=0; i < number_of_rows; i++) {
    result.push([]);
    let counter = i * number_of_rows;
    for (let j=0; j < number_of_tiles_per_row; j++) {
      result[i].push(sample[counter + j])
    }
  }
  return result;
}
