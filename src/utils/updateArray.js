export default function updateArray(word, array) {
    const wordsBefore = [];
    while (array[0] && array[0] <= word) {
        wordsBefore.push(array.shift());
    }
    wordsBefore.concat([word]).concat(array);
}