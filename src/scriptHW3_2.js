//  1 завдання: 

let maximum = function () {
    let max = arguments[0];
    if (arguments.length > 2 && arguments.length < 5) {            
            for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] > max){
                max = arguments[i];
            }                
        }
        alert('Максимальний переданий функції числовий параметр: ' + max);
    } else alert('Кількість параметрів відмінне від 3 або 4');
}
//    maximum(19,-22,-48);
    
    
//  2 завдання:

let progression = function () {
    let n = arguments[0];
    let q = arguments[1];
    let  Sn = 1; bFirst = 1;
// спосіб 1
    for (let i = 1; i < n; i++){
        bFirst = bFirst * q;
        Sn += bFirst;        
    }    
// спосіб 2
//    Sn = bFirst * (1 - Math.pow(q, n)) / (1 - q);
    alert(Sn);    
}
//progression(4,3);


//  3 завдання:

let range = function(){
    
    let x = +prompt('Введіть число min');
    let y = +prompt('Введіть число max');

    let res;
    x = parseInt(x);
    y = parseInt(y);

    for(x; x <= y;x++){

        if(x ==2 || x == 3){
            res = x;
        }   
	   for (let i=2; i<x; i++){             
		  if(x<=1 || x%i==0){
			 break;
          }else{
              res = x;
          }        
	   }
       console.log(res); 
    }
}
//range();

