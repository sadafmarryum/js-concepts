// get user to input num using prompte. check num is multiple of 5 or not
let num = prompt('Enter a number for check the multiple:');
if (num % 5 === 0) {
 console.log(num, 'is the multiple of 5');
}
else {
 console.log(num, 'is NOT the multiple of 5');
}

///////////Grades according to their scores
let score = prompt('enter a scores(0-100)');
let grade;
if (score >= 90 && score <= 100) {
 grade = "A";
}
else if (score >= 70 && score <= 89) {
 grade = "B";
}
else if (score >= 60 && score <= 79) {
 grade = "C";
}
else if (score >= 50 && score <= 59) {
 grade = "D";
}
else if (score >= 0 && score <= 49) {
 grade = "F";
}
console.log('According to your scores:' + score + ',your grade was:' + grade);


///////////Calculate the sum of 1 to n
let n = prompt('Enter n for check the sum:');
let sum = 0;
for (let i = 1; i <= n; i++) {
 sum = sum + i;
}
console.log('sum of num is:' + sum);

//print all even no using for of loop
for(let n=1; n<=10; n++){
 if(n%2==0){
  console.log(`${n} is even`); 
 }
 else{
     console.log(`${n} is odd`);
 }
}

///guess a number with user enter value 
let guessno = 25;
let userno = prompt('enter number for guess:');

while (guessno != userno) {
 userno= prompt('You enter the wrong number, plz guess again:');
 console.log("You guess the wrong number");
}
console.log("You guess the correct number");

///////generate username using prompt start with @ then fullname then length of fullname  using build-in-methods
let fname=prompt('enter full name:');
 let lengthfname =fname.length;
let username = '@' + fname + lengthfname
console.log(username);

////find the average marks of the student with the help of array
let marksarry= [40,80,60,20,10];
let summarks =0;
let lenarry = marksarry.length;
for(let aver of marksarry)
{
 summarks += aver;
}
let average = summarks / lenarry;
console.log(`Average marks of the student is ${average}`);

////items have an offer 10% OFF store final price after applying offer store in array
let items= [347,382,332,989,200]
for (let itm of items){
 let perofitems = itm/10;
 let offerprice = itm - perofitems;
 console.log(`Item price is ${itm} with 10% OFF actual price of items after apply offer ${offerprice}`);
   
}


