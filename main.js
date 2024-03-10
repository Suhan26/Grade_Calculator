var bangla = 33 ;

var english =85 ;

var math = 87 ;

var histor = 86;

var ave = (bangla + english + math + histor) / 4;
console.log(ave);

if (ave >= 90) {
    console.log("Grade = A+");
}
else if (ave >= 80) {
    console.log("Grade = A");
}
else if (ave >= 70) {
    console.log("Grade = A-");
}
else if (ave >= 60) {
    console.log("Grade = b");
}
else if (ave >= 50) {
    console.log("Grade = b-");
}
else if (ave >= 45) {
    console.log("Grade = c");
}
else if (ave >= 40) {
    console.log("Grade = c-");
}
else if (ave >= 35) {
    console.log("Grade = d");
}

else if (ave >= 33) {
    console.log("Grade = d-");
}
else if (ave <= 33 ) {
    console.log("fale");
}

