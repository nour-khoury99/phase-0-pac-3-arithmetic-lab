let number =5 ;
number++;
console.log(number); //6

 number--;
console.log(number);//5

--number;
console.log(number);//4

++number;
console.log(number);//5

number += 3 ;//number =number +3 = 8

number -= 2 ;//number = number -2 = 6;

number *=10 ;//number = number*10 = 60

number /=5 ;//number = number/5 = 12

num  = 10;

function add5(){
   return (num +=5);
}

function dividedBy3(){
    return (num /= 3);
}

dividedBy3();

add5();



