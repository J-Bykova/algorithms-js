let arr = [4, 5, 1, 3, 6, 2];

function bubbleSort(arr) {
    let lengthArr = arr.length;
    for (let i = 0; i < lengthArr - 1; i++) {
        for (let k = 0; k < lengthArr - i - 1; k++){
            if (arr[k] > arr[k + 1]){
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    return arr;
}


console.log(arr);
console.log(bubbleSort(arr));
