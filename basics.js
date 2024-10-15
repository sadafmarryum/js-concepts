// // get user to input num using prompte. check num is multiple of 5 or not
// let num = prompt('Enter a number for check the multiple:');
// if (num % 5 === 0) {
//  console.log(num, 'is the multiple of 5');
// }
// else {
//  console.log(num, 'is NOT the multiple of 5');
// }

// ///////////Grades according to their scores
// let score = prompt('enter a scores(0-100)');
// let grade;
// if (score >= 90 && score <= 100) {
//  grade = "A";
// }
// else if (score >= 70 && score <= 89) {
//  grade = "B";
// }
// else if (score >= 60 && score <= 79) {
//  grade = "C";
// }
// else if (score >= 50 && score <= 59) {
//  grade = "D";
// }
// else if (score >= 0 && score <= 49) {
//  grade = "F";
// }
// console.log('According to your scores:' + score + ',your grade was:' + grade);


// ///////////Calculate the sum of 1 to n
// let n = prompt('Enter n for check the sum:');
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//  sum = sum + i;
// }
// console.log('sum of num is:' + sum);

// //print all even no using for of loop
// for(let n=1; n<=10; n++){
//  if(n%2==0){
//   console.log(`${n} is even`); 
//  }
//  else{
//      console.log(`${n} is odd`);
//  }
// }

// ///guess a number with user enter value 
// let guessno = 25;
// let userno = prompt('enter number for guess:');

// while (guessno != userno) {
//  userno= prompt('You enter the wrong number, plz guess again:');
//  console.log("You guess the wrong number");
// }
// console.log("You guess the correct number");

// ///////generate username using prompt start with @ then fullname then length of fullname  using build-in-methods
// let fname=prompt('enter full name:');
//  let lengthfname =fname.length;
// let username = '@' + fname + lengthfname
// console.log(username);

// ////find the average marks of the student with the help of array
// let marksarry= [40,80,60,20,10];
// let summarks =0;
// let lenarry = marksarry.length;
// for(let aver of marksarry)
// {
//  summarks += aver;
// }
// let average = summarks / lenarry;
// console.log(`Average marks of the student is ${average}`);

// ////items have an offer 10% OFF store final price after applying offer store in array
// let items= [347,382,332,989,200]
// for (let itm of items){
//  let perofitems = itm/10;
//  let offerprice = itm - perofitems;
//  console.log(`Item price is ${itm} with 10% OFF actual price of items after apply offer ${offerprice}`);   
// }

/////create a array to store company name (remove 1 company from array , remove Uber & add Ola in this place , add amazon at the end)
let companynames =["Bloomberg","Microsoft","Uber","google","IBM","Netflix"];

console.log("Actual array is  "+companynames);

companynames.shift();
console.log("Remove 1 company name  "+companynames);

companynames.splice(1,1,"Ola");
console.log("Remove Uber & add Ola in this place "+ companynames);


companynames.push("Amazon");
console.log("add amazon at the end  "+ companynames);



////find the vowels words in the string using function
let input= prompt("Enter a value :");
console.log(`Actual string is ${input}`);

function vowels(){
 for(i=0; i<input.length; i++){
  if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u")
 {
  console.log( "vowels word are  "+input[i]); 
 }
 }
}
vowels();


///find the square of the number using for each
let num =[2,3,4,6,5];
let squr=0;
console.log("Numbers in the array are: "+num);
let squareOfnum =(num)=>{
  squr= num*num;
  console.log("Square of the no. is: "+squr); 
}
num.forEach(squareOfnum);


////////differ btn forEach vs map
let newaa = num.forEach((num) => {
return num*num;
});
console.log("I am forEach():  "+newaa+ "    " +num);

let newa = num.map((num) => {
 return num * num;
});
console.log("I am map():  " + newa + "    " +num);


////find mark is > 90 using filter()
let stdMarks=[50,60,70,90,100,210,405,30,40]
 let greatermarks=stdMarks.filter((val)=> {
  return val >= 90
 });
console.log(greatermarks);
 

////create a num of array 1 t0 n
let n=prompt("Enter a num:")
let arry=[];

for(i=1; i<=n; i++){
    arry[i-1]=i
}
console.log(`the n is ${n} & array of n is  ${arry}`);


////sum of n im array using reduce()
let newarry= arry.reduce((pre,curr)=>{
 // return pre+curr;
 return pre*curr;
});
console.log("sum of array:  "+newarry);
