///////////Grades according to their scores
let score = prompt ('enter a scores(0-100)');
let grade;
if (score >= 90 && score <= 100){
 grade= "A";
}
else if (score >= 70 && score <= 89) {
 grade= "B";
}
else if (score >= 60 && score <= 79) {
 grade= "C";
}
else if (score >= 50 && score <= 59) {
 grade= "D";
}
else if (score >= 0 && score<=49) {
 grade= "F";
}
console.log('According to your scores: 90' + score+ ',your grade was:'+ grade);