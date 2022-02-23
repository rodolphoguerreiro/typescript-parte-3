/*
* Typing Array
*/
let animals: string[] = ['Animal1','Animal2'];
let fruits: Array<string> = ['Fruit1','Fruit2'];
let languages: string[] = new Array('PHP', 'Node');

let listNumbers: Array<number> = [1, 2, 3, 4, 5];
listNumbers = [...listNumbers, 6, 7, 8, 9, 10];

const arrayNumbers = [10, 20, 30, 40, 50];

for(const i of arrayNumbers) {
    console.log(i);
}

for(const i in arrayNumbers){
    console.log(i);
}

//https://imasters.com.br/front-end/diferenca-entre-for-of-e-for-in