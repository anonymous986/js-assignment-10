// answer 1
var multiDimensionalArray = [ [], [], [] ]

// answer 2
function ans2() {
var multiDimensionArray = [
    [0, 1, 2, 3 + "<br>"],
    [1, 0, 1, 2 + "<br>"],
    [2, 1, 0, 1]
];

document.write(multiDimensionArray)
}

// answer 3
function ans3() {
    for (let i = 1; i <11; i++) {
        document.write(i + "<br>")
    }
}

// answer 4
function ans4() {
    var input = prompt("enter the number to get multiplication table.")
    var length = parseInt(prompt("Till where do you want the table to be?"))
    for (let i = 0; i < length + 1; i++) {
        document.write(input + " x " + i + " = " + input*i + "<br>")
    }
}

// answer 5
function ans5() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    document.write(fruits + "<br>")
    
    for (let i = 0; i < fruits.length; i++)
        document.write("Element at index " + i + " is : " + fruits[i] + "<br>")
}

// answer 6
function ans6() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    // answer 6a
   document.write("Counting : " + numbers + "<br>")
    // answer 6b
    document.write("Reverse counting : " + numbers.reverse() + "<br>")
    // answer 6c
    let even = [];
for (let i = 0; i <= numbers.length; i++) {
  if (i % 2 === 0) {
    even.push(i);
  }
}
document.write("Even numbers : ", even.join(", ") + "<br>");
    
    // answer 6d
    let odd = [];
for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    odd.push(i);
  }
}
document.write("Odd numbers : ", odd.join(", ") + "<br>");

    // answer 6e
    let series = [];
for (let i = 2; i <= numbers.length; i += 2) {
  series.push(i + "k");
}
document.write("Series : ", series.join(", "));
}    

function ans7() {
   var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
   var input = prompt("what do you want from bakery?");
   input = input.toLowerCase();
   let found = false;
   for (i = 0; i < bakeryItems.length; i++) {
        if (input === bakeryItems[i]) {
     document.write("this item is avaiable at our bakery! at index " + i + " !<br>");
            found = true;
            break;
        } 
   }
   if (!found) {
    document.write("sorry, " + input + " is not available at our bakery.");
   }
}

// answer 8
function ans8() {
let num = [24, 53, 78, 91, 12];
let greatest = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] > greatest) {
    greatest = num[i];
  }
}
document.write(greatest + " is the greatest number in the array.");
}

// answer 9
function ans9() {
  let num = [24, 53, 78, 91, 12];
let smallest = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}
document.write(smallest + " is the smallest number in the array.");
}

// answer 10
function ans10() {
  var multiplesOf5 = [];
  for (i = 1; i < 21; i++) {
    multiplesOf5.push(i*5)
  }
  document.write(multiplesOf5)
}

