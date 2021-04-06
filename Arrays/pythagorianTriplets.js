// Write a function that takes in a list of numbers and returns a boolean indicating
// whether or not the list contains pythagorian triplets.

function pythagorianTriplets(list) {
  list = list.sort((a,b) => a - b);
  if (list.length < 3) return false;
   for (let i = 0; i < list.length; i++) {
     if (list[i] < 0) continue;
     for (let j = i + 1; j < list.length; j++) {
       if (list[j] < 0) continue;
       for (let k = j + 1; k < list.length; k++) {
         if (list[k] < 0) continue;
         if (isTriplet(list[i], list[j], list[k])) return true;
       }
     }
   }

   return false;
}

function pTriplets(list) {
  list = list.sort((a, b) => a - b);
  if (list.length < 3) return false;

  for (let i = list.length - 1; i >= 0; i--) {
    let c = list[i];
    let b = list[i - 1];
    for (let j = 0; j < i - 1; j++) {
      if (list[j] < 0) continue;
      let a = list[j];
      if (isTriplet(a,b,c)) return true;
    }
  }

  return false;
}

function isTriplet(a, b, c) {
  return a ** 2 + b ** 2 == c ** 2;
}

console.log(pTriplets([1,2,3,4,5]));
console.log(pTriplets([3,4,5]));
console.log(pTriplets([5,4,3]));
console.log(pTriplets([12, 1, 3]));
console.log(pTriplets([-3, 4, 5]));
console.log(pTriplets([4]));
console.log(pTriplets([3, 6, 4, 5]));
// console.log(pythagorianTriplets([3, 4, 5]));
// console.log(pythagorianTriplets([5, 4, 3]));
// console.log(pythagorianTriplets([12, 1, 3]));
// console.log(pythagorianTriplets([-3, 4, 5]));
// console.log(pythagorianTriplets([4]));
// console.log(pythagorianTriplets([3, 6, 4, 5]));
