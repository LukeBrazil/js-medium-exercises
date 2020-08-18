
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% fair -> 15% bad -> 10%

function tip(bill, service) {

    if (service === 'good') {
        return bill * .20
    } else if (service === 'bad') {
        return bill * .15
    } else {
        return bill *.10
    }
}

tip(1000, 'bad');


// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount(bill, service) {
    if (service === 'good') {
        return bill * .20 + bill
    } else if (service === 'bad') {
        return bill * .15 + bill
    } else {
        return bill *.10 + bill
    }
}

totalAmount(100, 'good')

// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumbers(num1, num2) {
    console.log(num1)
    for(var i = num1; i <= num2; i++) {
        num1 += 1;
        console.log(num1)
    }
}

printNumbers(1, 10)

function printNumbers(num1, num2) {
    console.log(num1)
    while (num2 != num1) {
        num1 = num1 + 1
        console.log(num1)
    }
}

printNumbers(2, 40)

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(num) {
    square = '---'
    return square * num;

printSquare(5)

// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madLib(a, b) {
    console.log(a + "'s favorite subject in school is " + b + ".")
}

madLib('Luke', "history")
