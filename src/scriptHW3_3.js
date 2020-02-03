//  1 завдання: 

let getParams = function(){
    alert('кількість параметрів:  ' + arguments.length);
}  

//getParams(10,true,15);

//  2 завдання: 

let min = function(){
    if (arguments.length < 2){
        alert('Must be at least 2 numbers')
    }else{
        let minimum = arguments[0];
        for(let i = 0; i < arguments.length; i++){
            if(arguments[i] < minimum) minimum = arguments[i];
        }
        alert(minimum)
    }
}
//min(48,-2,45,92);

//  3 завдання: 

let max = function(){
    if (arguments.length < 2){
        alert('Must be at least 2 numbers')
    }else{
        let maximum = arguments[0];
        for(let i = 0; i < arguments.length; i++){
            if(arguments[i] > maximum) maximum = arguments[i];
        }
        alert(maximum)
    }
}
//max(48,-2,45,92);

//  4 завдання: 

let lucky = function(){
    let leftSide = 0, rightSide = 0;
    if(arguments.length !=8){
        alert('error')
    }else{
        for(let i = 0; i < 4; i++){
            leftSide = arguments[i] + leftSide;            
            rightSide = arguments[i + 4] + rightSide;            
        }
        if (leftSide == rightSide){
            alert('luckyTicket?  true');
        }else{
            alert('luckyTicket?  false')
        }
    }
}

//lucky(12,14,16,20,20,16,14,12);


//  5 завдання: 

let positiveNegative = function(){
    

    let positive = 0, negative = 0;
    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] > 0){
            positive++;
        }else if (arguments[i] < 0){
            negative++;
        }
    }
    alert('Додатні: ' + positive + '  Від\'ємні: ' + negative);
}
//positiveNegative(12,14,-16,20,20,16,14,12);

















