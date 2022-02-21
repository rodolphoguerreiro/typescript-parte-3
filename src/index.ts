/*
* Typing Vars
*/
let mensage: string = 'Helo World!';
let active: boolean = true;

// type number
let num1: number = 14.0;     //number
let num2: number = 0x37CF;   //hexadecimal
let num3: number = 0o377;    //octal
let num4: number = 0b111001; //binary

//type bgint: only available on ES2020
//let big1: bigint = 345563456375467367344n; //add {n} at the end

// type any = not verify var type
let neverUse: any = 'teste';
const useOnly: { [externalFieldsForm: string]: any } = {
    name: 'My name',
    age: 23
}
console.log(useOnly);

// type unknown = recommended instead of any
let example: unknown;
example = true;
example = 123;
example = 'teste';

//type void
let varEx: void;

//type null
let varExempNull = null;
console.log(varExempNull); //output null
console.log(typeof varExempNull); //output object

//type undefined
let varExempUndef;
console.log(varExempUndef); //output undefined
console.log(typeof varExempUndef); //output undefined

/*
* Typing Array
*/
let animals: string[] = ['Animal1','Animal2'];
let fruits: Array<string> = ['Fruit1','Fruit2'];
let languages: string[] = new Array('PHP', 'Node');

let listNumbers: Array<number> = [1, 2, 3, 4, 5];
listNumbers = [...listNumbers, 6, 7, 8, 9, 10];

/*
* Typing Object
*/
let car: {
    color: string;
    serie: number;
    price: number
}
car = { color: 'black', serie:123, price:123 };

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

/*
* Typing Numeric Enum [!]
*/
//Numeric
enum Language {
    Portuges,
    English,
    Spanish,
    France
}

//String
enum WeekDay {
    Monday = 'Mon',
    Saturday = 'Sat',
}