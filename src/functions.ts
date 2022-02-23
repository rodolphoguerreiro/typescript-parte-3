/*
* Typing function
*/
function addNumbers(num1: number, num2: number){
    return num1 + num2;
}

//Anonymous
const exemple1 = function (mesage: string) {
    return mesage;
}

//Arrow function
const exemple2 = (mesage: string) => {
    return mesage;
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

/*
* Typing Never
*/
function errorExemp1(msg: string): never {
    throw new Error(msg);
}
console.log(errorExemp1('Error 01'));

/*
* Union Type
*/
function add(x: number | string, y: number | string){
    if(typeof x === 'number' && typeof y === 'number'){
        return x + y;
    }

    if(typeof x === 'string' && typeof y === 'string'){
        return x.concat(y);
    }

    throw new Error('Erro');
}