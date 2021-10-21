let arr = [6, 3, 5, 2, 1, 4];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] > arr[k]) {
                let temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }

    return arr;
}

console.log(arr);
console.log(selectionSort(arr));
