"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// async-await
function printByIndex(params) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hello(params);
        console.log("done");
    });
}
function hello(params) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index in params) {
            console.log(array[index] + "_sync");
            setTimeout(() => {
                console.log(array[index]);
            }, 500);
        }
    });
}
printByIndex(array);
//# sourceMappingURL=index.js.map