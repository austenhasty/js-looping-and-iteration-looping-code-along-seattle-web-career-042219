// Code your solutions in this file

function writeCards(arr, event) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return newArr
}

function countdown(n) {
  let count = n;
  while (count >= 0) {
    console.log(count--)
  }
}
