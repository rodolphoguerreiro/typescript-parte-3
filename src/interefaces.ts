/*
* Typing Interfaces
*/
interface Car {
    color: string;
    serie: number;
    price: number
}

function sale(car: Car){
    return 'Sale ' + car.color;
}

sale({ color: 'black' });

// In typing 'type', the all properties are required
type Category = {
    name: string;
    readonly model: string; //Cannot be modified
    serie?: number; //Not required
}

function classify(car1: Category){
    return 'Category ' + car1.name;
}

classify({ name: 'VW' }); //Showing error because the elem name is required

/*
* Extends
*/
interface Dad {
    name: string;
}

interface Mon {
    surname: string;
}

interface Son extends Dad, Mon {
    age: number;
}

const son: Son = {
    name: 'FirstName',
    surname: 'LastName',
    age: 12,
};

/*
* Intersection
*/
interface Empployee {
    id: number;
    age: number;
}

interface Manager {
    status: boolean;
}

type ManagementEmployee = Empployee & Manager;
let newManager: ManagementEmployee = {
    id: 12345,
    age: 32,
    status: true
}

/*
* Generics
*/
type User = {
    name: string;
    email: string;
}

type Admin = {
    name: string;
    email: string;
    isAdmin: boolean;
}

const user: User = {
    name: 'MyName',
    email: 'asd@asd.com'
}

const admin: Admin = {
    name: 'MyName',
    email: 'asd@asd.com',
    isAdmin: true
}

//Conventional access object user
function systemAccess1(user: User): User{
    return user;
}

console.log(user);

//Using 'generic', in this case with letter "T'
function systemAccess2<T>(user: T, email: string): T{
    return user;
}

console.log(systemAccess2<User>(user, 'asd@asd.com'));
console.log(systemAccess2<Admin>(admin, 'admin@admin.com'));