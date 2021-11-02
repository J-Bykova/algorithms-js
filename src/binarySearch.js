let arr = [1, 2, 2, 3, 4];

function binarySearch(sortedArr, num) {
  let start = 0;
  let end = sortedArr.length;

  while (start <= end) {
    console.log(`${start} <= ${end}`);

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return `${num} was found at index ${mid}`;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `${num} was not found in the array`;
}

console.log(binarySearch(arr, 5));
