//  1 завдання: 

let sumArr = function(){
    let sum = 0;
    let arr = [2,3,5,10,10,80];
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
//sumArr();
    
//  2 завдання:  

let addArrAfterPos = function(arr, arrToPaste, n) {
    arr.splice(n, 0, ...arrToPaste);
    console.log(arr);
}
//addArrAfterPos([2, 3, 4, 5, 10, 11, 12, 13], [6, 7, 8, 9], 4);

//  3 завдання: 

let getPosOfArr  = function(arr, n){
    let pos  = 0;
    for(let i=0; i<arr.length; i++){
        if (arr[i] == n){
            pos =  arr.indexOf(n);
            console.log(pos);
            break;
        }            
    }
    if (pos  == 0){
        console.log('Немає такого елементу')
    }   
}
//getPosOfArr([11,12,13,14,15,16], 15);

//  4 завдання:

let getFilteredArr = function(arr, n){
    let filteredArr = arr.filter((value) => value > n);
    console.log(filteredArr);    
}
//getFilteredArr([21,22,23,24,25,26,27,28,29], 24); 

//  5 завдання:

  
let getUniqueArrItems = function(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
            let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if (count === 1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);    
}
//getUniqueArrItems([1,2,3,3,5,6,9,2,3,4]);