
 function addition(a, b){
    return a + b;
}
console.log(addition(5, 10));
// Q2:
 function bitwiseAND(a, b){
     return a & b;
 }
 function bitwiseOR(a, b){
     return a | b;
 }
 function bitwiseXOR(a, b){
     return a ^ b;
 }
 console.log(bitwiseAND(5, 3));
 console.log(bitwiseOR(5, 3));
 console.log(bitwiseXOR(5, 3));

//Q3

 function addUp(a){
     let sum = 0;
     for (let i = 1; i <= a; i++){
         sum = sum + i;
}
return sum;
}
 console.log(addUp(4));

//Q4:
 function progressBar(a) {
     let filled = Math.floor(a / 10);
     let empty = 10 - filled;

     return "#".repeat(filled) + "-".repeat(empty);
 }

 console.log(progressBar(10));
 console.log(progressBar(40));
 console.log(progressBar(49));
 console.log(progressBar(100));
// Q5: