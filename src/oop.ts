// class with constructor

class Chai{
    name: string;
    // price: number

    // constructor( name: string , price: number){
    //     this.name=name,
    //     this.price=price
    // }
     constructor( name: string){
        this.name=name,
        // this.price=price
        // this take point kore je object banacche
        console.log(this)
    }
}

// const chaiDetails = new Chai('Masala',20)
const chaiDetails = new Chai('Masala')

// access modifier
class ChaiWithAccessModifier {
    // public = সবার জন্য উন্মুক্ত
    public flavor: string;
    // private = class-এর ভেতরে সীমাবদ্ধ।
    private secretIngrediants:string
// protected shopName → parent ও child class-এর ভেতরে access করা যাবে।
     protected shopName:string
    constructor(flavor: string, secretIngrediants:string,shopName:string) {
        this.flavor = flavor;
        this.secretIngrediants=secretIngrediants
        this.shopName=shopName
    }
    reveal(){
        this.secretIngrediants // class-এর ভেতরে private property access করা যাবে।
        console.log(`The secret ingrediants of ${this.flavor} chai is ${this.secretIngrediants}`)
    }

}
// extends → ChaiMaker class-কে ChaiWithAccessModifier-এর properties ও methods inherit করতে দেয়।
  class ChaiMaker extends ChaiWithAccessModifier{
       getMaker(){
         return this.shopName
       }
    }
const chai = new ChaiWithAccessModifier("Masala","Elaichi","Chai Wala");

console.log(chai.flavor); // Masala
chai.reveal(); // The secret ingrediants of Masala chai is Elaichi
// new ChaiMaker(...) দিয়ে object তৈরি করতে হবে এবং .getMaker() দিয়ে method call করতে হবে।
new ChaiMaker("Masala", "Elaichi", "Chai Wala").getMaker()
