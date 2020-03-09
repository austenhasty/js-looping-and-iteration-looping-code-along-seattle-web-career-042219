// Code your solutions in this file
function writeCards(arr, e) {
  let newAr = []
  for (let i=0; i < arr.length; i++) {
    newAr.push(`Thank you, ${arr[i]}, for the wonderful ${e} gift!`);
  }
  return newAr;
}

function countdown(int) {
  let i = int
  while (i >= 0) {
    console.log(i--);
  }
}
