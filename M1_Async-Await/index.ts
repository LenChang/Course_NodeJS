let a = "";
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index in array) {
//   // sync.
//   console.log(array[index] + "_sync");
//   //async.
//   setTimeout(() => {
//     console.log(array[index]);
//   }, 500);
// }
// console.log("done");

// async-await practicing
async function printByIndex(params: number[]) {
  for (let index in params) {
    console.log(array[index] + "_sync");
    setTimeout(() => {
      console.log(array[index]);
    }, 500);
  }
  console.log("done");
}

printByIndex(array);
