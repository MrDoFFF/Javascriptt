const array = [3, 4, 5, 5, 8, 12, 50, 1];
// 34
console.log(Math.max(...array.filter((_, i) => i % 2 === 0)));
// 35
console.log(Math.min(...array.filter((_, i) => i % 2 != 0)));

// 36
const minIndex = array.indexOf(Math.min(...array));
console.log("Ən kiçik elementin indeksi:", minIndex);
// // 37
const maxIndex = array.indexOf(Math.max(...array));
console.log("Ən böyük elementin indeksi", maxIndex);
// // 38
const count1 = array.filter((x) => x === Math.max(...array)).length;
console.log("Maksimum elementin sayı:", count1);
// // 39
const count = array.filter((x) => x === Math.min(...array)).length;
console.log("Minimum elementin sayi:", count);
// // 40
const maxIndex1 = array.indexOf(Math.max(...array));
[array[0], array[maxIndex]] = [array[maxIndex], array[0]];
console.log(array);
// // 41
const minIndex1 = array.indexOf(Math.min(...array));
[array[0], array[minIndex1]] = [array[minIndex1], array[0]];
console.log(array);
// 42 ?
[
  array[array.indexOf(Math.max(...array))],
  array[array.indexOf(Math.min(...array))],
] = [Math.min(...array), Math.max(...array)];
console.log(array);
// 43
[
  array[
    array.findIndex(
      (_, i) =>
        i % 2 === 0 &&
        array[i] === Math.max(...array.filter((_, i) => i % 2 === 0))
    )
  ],
  array[
    array.findIndex(
      (_, i) =>
        i % 2 !== 0 &&
        array[i] === Math.min(...array.filter((_, i) => i % 2 !== 0))
    )
  ],
] = [
  Math.min(...array.filter((_, i) => i % 2 !== 0)),
  Math.max(...array.filter((_, i) => i % 2 === 0)),
];
console.log(array);
