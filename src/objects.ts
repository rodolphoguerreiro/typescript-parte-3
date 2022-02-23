/*
* Typing Object
*/
let car: {
    color: string;
    serie: number;
    price: number
}

car = { 
    color: 'black', 
    serie:123, 
    price:123 
};

function sale(car: { color: string }){
    return 'Offer ' + car.color;
}

sale({ color: 'black' });