/*
* Typing function
*/
function addNumbers(num1: number, num2: number){
    return num1 + num2;
}

/*
* Typing Tuple
*/
function listPersons(names: string[], ages: number[]){
    return [...names, ...ages];
}
let result = listPersons(['Name1', 'Name2'], [34, 21]);

type Name = 
    | [firstName: string, lastName: string] // Premises
    | [firstName: string, middleName: string, lastName: string];

function createPerson(...name: Name){
    return [...name];
}

console.log(createPerson('Name1', 'Name2'));

/*
* Typing Enum [!]
*/
const enum Food {
    Hanburger,
    Pizza,
    Barbecue
}

function cookie(food: Food){
    return 'Fast Fodies';
}

console.log(cookie(Food.Pizza));

/*
* Typing Void
*/
function logError(msg: string): void {
    //return msg;       typing with :string | number etc...
    //console.log();    typing with :void
}

//Ex. arrow func
const logError2 = (msg: string): void => {
    //return msg;       typing with :string | number etc...
    //console.log();    typing with :void
}