const sum = (a, b) => a + b

const calculateFoodTotal = (food, tip) => {
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
}

console.log(calculateFoodTotal(300, 25))


//If rain Grab you umbrella
//else Wear your sunglasses

// let weather = prompt('What is the weather?');

// if (weather == 'rain') {
//     console.log("Grab your umbrella")
// }
// else {
//     console.log("Wear your sunglasses")
// };

// function sayMyName() {
//     console.log('Jay')
// }

// function greeting(name) {
//     greet = (`hi, ${name} Nice to meet you!`)
//     console.log(greet)
// }

// function sum(a, b) {
//     return a + b
// }

/*
#1. State the name of your function
#2. Speak to the arguments (inputs) that it accepts
#3. Does: (what does this do?)
*/