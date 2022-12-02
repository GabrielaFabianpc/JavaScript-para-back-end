const notas = [7, 7, 8, 9];
const notasNovas = [...notas, 10];

console.log(`As novas notas são ${notasNovas}`);
console.log(`As notas originais são ${notas}`);

/*function myFunction(x, y, z) {
  return x + y + z;
}
const args = [0, 1, 2];
console.log(myFunction(...args));
*/
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]

const myFunction = (a, b, c) => {
  return a + b + c;
};
const numeros = [1, 1, 1];
console.log(myFunction(...numeros));
