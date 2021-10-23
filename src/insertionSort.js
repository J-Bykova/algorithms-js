let arr = [5, 4, 1, 3, 6, 2];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let k = i - 1;
        while (k >= 0 && arr[k] > current) {
            arr[k + 1] = arr[k];
            k--;
        }
        arr[k + 1] = current;
    }

    return arr;
}

console.log(arr);
console.log(insertionSort(arr));
