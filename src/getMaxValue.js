
let arr = [4, 5, 1, 3, 6, 2];

function getMaxValue(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++){
    if(arr[i] > maxNum) maxNum = arr[i];
  }
  return maxNum;
}

console.log(getMaxValue(arr));
