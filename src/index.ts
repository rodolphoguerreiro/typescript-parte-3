/*
* Typing Vars
*/
let mensage: string = 'Helo World!';
let active: boolean = true;

// union type
let multiType: number | boolean;
multiType = 20; //Valid
multiType = true; //Valid
multiType = 'string'; //Invalid

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //Valid
myResult = "pass"; //Valid
myResult = "failure"; //invalid

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
* Type aversion
*/
let randonvalue: unknown = 10;

randonvalue = true;
randonvalue = 'Mateo';

if(typeof randonvalue === 'string'){
    console.log((randonvalue as string).toUpperCase()); // Return MATEO
}else{
    console.log('Eroo'); // Return erro
}

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