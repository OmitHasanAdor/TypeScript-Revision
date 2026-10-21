// class with constructor

class Chai {
    name: string;
    // price: number

    // constructor( name: string , price: number){
    //     this.name=name,
    //     this.price=price
    // }
    constructor(name: string) {
        this.name = name,
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
    private secretIngrediants: string
    // protected shopName → parent ও child class-এর ভেতরে access করা যাবে।
    protected shopName: string
    constructor(flavor: string, secretIngrediants: string, shopName: string) {
        this.flavor = flavor;
        this.secretIngrediants = secretIngrediants
        this.shopName = shopName
    }
    reveal() {
        this.secretIngrediants // class-এর ভেতরে private property access করা যাবে।
        console.log(`The secret ingrediants of ${this.flavor} chai is ${this.secretIngrediants}`)
    }

}
// extends → ChaiMaker class-কে ChaiWithAccessModifier-এর properties ও methods inherit করতে দেয়।
class ChaiMaker extends ChaiWithAccessModifier {
    getMaker() {
        return this.shopName
    }
}
const chai = new ChaiWithAccessModifier("Masala", "Elaichi", "Chai Wala");

console.log(chai.flavor); // Masala
chai.reveal(); // The secret ingrediants of Masala chai is Elaichi
// new ChaiMaker(...) দিয়ে object তৈরি করতে হবে এবং .getMaker() দিয়ে method call করতে হবে।
new ChaiMaker("Masala", "Elaichi", "Chai Wala").getMaker()

// এটি JavaScript-এর true private field।
class ChaiWithTruePrivateField {
    #secretIngrediants: string = "Elaichi";
    getSecretIngredients() {
        console.log(`The secret ingrediants of chai is ${this.#secretIngrediants}`)
        return this.#secretIngrediants
    }
}

const chaiPrv = new ChaiWithTruePrivateField()
chaiPrv.getSecretIngredients()

class Cup {
    // readonly eta mane hocche ekhane ekbar assign korte parbe but change korte parbe na
    readonly Capacity: number = 200;
    constructor(Capacity: number) {
        this.Capacity = Capacity
    }
}

// TypeScript-এর Getter এবং Setter-এর উদাহরণ।
class ModernChai {
    private _sugar: number = 2
    // Getter
    // get sugar() → sugar-এর value পড়তে ব্যবহার হয়।
    get sugar() {
        return this._sugar
    }
    // Setter
    // set sugar(value) → sugar-এর value পরিবর্তন করতে ব্যবহার হয় এবং এখানে validation করে।
    set sugar(value: number) {
        if (value > 5) throw new Error("Too much sweet");
        this._sugar = value
    }
}

const chaiModern = new ModernChai()
// Getter
chaiModern.sugar // 2
// Setter
chaiModern.sugar = 4

// static members

class EkChai {
    /*
    static property হলো class-এর নিজস্ব property, object-এর নয়।
    তাই সরাসরি class-এর নাম দিয়ে access করতে পারো:
    console.log(EkChai.shopName); // Chai code cafe

    */
    static shopName = "Chai code cafe"
/**
 এখানে constructor()-এ flavor নেওয়া হয়েছে, কারণ প্রতিটি নতুন chai তৈরি করার সময় তার flavor আলাদা হতে পারে।

 const chai1 = new EkChai("Masala");
const chai2 = new EkChai("Ginger");

console.log(EkChai.shopName); // Chai code cafe
console.log(chai1.flavor);    // Masala
console.log(chai2.flavor);    // Ginger
 */
    constructor(public flavor: string) {

    }
}
console.log(EkChai.shopName)

// abstract class
/**
 TypeScript-এ abstract মানে হলো অসম্পূর্ণ class বা method, যেটাকে অন্য class-এ extend করে complete করতে হয়।
 - abstract class → সরাসরি new দিয়ে object তৈরি করা যায় না।
- abstract method → শুধু method-এর structure বলে দেয়, body থাকে না। Child class-কে method-টি implement করতে হয়।
মনে রাখবে: abstract হলো একটা blueprint—কী করতে হবে বলে দেয়, কিন্তু কীভাবে করতে হবে সেটা child class নির্ধারণ করে।

 */
abstract class MakeChai{
    abstract Maker():void
}

class chaiMaker extends MakeChai{
    Maker() {
        console.log(`Making chai...`) 
    }
}

class Heater{
    heat(){

    }
}
class HotChai  {
    constructor(private heater: Heater) {
        
    }
    make(){
        // ekhane heater.heat() diye chai garom kora hocche, kintu Heater class-er kono instance ekhane pass korte hobe.
        this.heater.heat()
    }
}