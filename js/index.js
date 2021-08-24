// Iteration 1: Names and Input

let hacker1 = "Unai";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jesus";

console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

const longestName = (name1, name2) => {
    name1.length > name2 ? console.log(`The driver has the longest name, it has ${name1.length} characters.`)
    : name2.length > name1.length ?  console.log(`The navigator has the longest name, it has ${name2.length} characters.`)
    : console.log(`Wow, you both have equally long names, ${name1.length} characters!`)
}

longestName(hacker1, hacker2);

// Iteration 3: Loops

const printNames = (name) => {
    for (let i = 0; i < name.length; i++) {
        console.log(`${name[i]} `);
    }
}

printNames(hacker1);

const namesInReverse = (name) => {
    let reversedName = name.split('').reverse().join("");

    for (let i = 0; i < reversedName.length; i++) {
        console.log(`${reversedName[i]} `);
    }
}

namesInReverse(hacker1);


const lexiNames = (name1, name2) => {
    let arr = [name1, name2];

    arr.sort((a, b) => a.localeCompare(b));

    arr[0] === name1 ? console.log(`The driver's name goes first.`)
    : arr[0] ===name2 ? console.log(`Yo, the navigator goes first definitely.`)
    : console.log(`What?! You both have the same name?`);
}

lexiNames(hacker1, hacker2);