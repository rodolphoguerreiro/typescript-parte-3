/*
* Typing class
*/
class Exemplo1 {
    
    constructor(
        private _data: Date, //Can be modified by date object's setDate() method, but not by assignment, Ex: this._data = Date(12);
        private _number: number,
        public name: string,
        public lastName: string,
        public readonly name2: string
    ){}

    get fullName(): string {
        return this.name + this.lastName;
    }

}



