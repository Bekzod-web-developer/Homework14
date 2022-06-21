function bubblesort(arr) {
    for(n=0;n<arr.length;n++){
    for(i=0 ; i < arr.length - 1; i++){
        while(arr[i] > arr[i+1]){
            const swap = arr[i]
            arr[i] = arr[ i+ 1]
            arr[i + 1] = swap
        }

    }
}
    
////////i-это пары    n=количество элементов
    console.log(arr)
}
bubblesort([1,3,456,789,45,2,3,4,56,1,164541,32,145,52,7,1,0,66])
