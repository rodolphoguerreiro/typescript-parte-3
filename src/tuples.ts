/*
* Typing Tuple
*/
let humam: [string, string, number]; //Limit 3
humam = ['Man', 'Asian', 39];

let shopCart: [string, ...string[]] = ['meet', 'wine', 'bread', '...']; //Infinite limit
console.log(...shopCart);

let person: [name: string, age:number, country:string] = ['My name', 34, 'BR'];

//Heterogeneou
let payCart: [number, boolean, ...string[]] = [5, true, ...shopCart];