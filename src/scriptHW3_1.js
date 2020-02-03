//  1 завдання: 

let degree = function(){

let a = +prompt('Введіть число a');
let b = +prompt('Введіть число b');
let c = 1;
let d = b;
if (b < 0){    
    b= b * (-1);    
}
for (let i = 1; i <= b; i++){
    if (d < 0){
        c *= 1 / a;
    }else{
    c *= a;
    }    
}
alert(a + ' ^ '+ b + ' = ' + c);
    
}
//degree();

//  2 завдання: 

let access = function(){

    let age = +prompt('Введіть вік');
    if(age >= 18) {  
        alert('Доступ дозволено');
    } else {
        let accept = prompt('Батьки дозволили?');
            if(accept == 'так'){
            alert('Доступ дозволено');
            }else {
            alert('У доступі відмовлено');
        }
    }
}

//access();

//  3 завдання:


let prime = function(){
let x = +prompt('Введіть число');

let res;
x = parseInt(x);
   if(x ==2 || x == 3){
            res = true;
    }
    if(x <= 1){
            res = false;
    }
    
	for (let i=2; i<x; i++){
             
		if(x<=1 || x%i==0){
			res=false;
			break;
		}else{
            res = true;
        }        
	}       
alert(res);
}
//prime();

                                      
                                      





