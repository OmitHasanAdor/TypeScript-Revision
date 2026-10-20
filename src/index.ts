/* small case a type likhte hoy*/

function getChai(items: number | string) {
    /* cotation diye type check korte hoy*/
    if (typeof items === "string") {
        return items.toUpperCase()
    }
    return items;
}
// console.log(getChai('masala chai'))
// console.log(getChai(10))

function makeOrder(orders: string, customer: string): string {
    return `Order for ${customer} ; his order is ${orders}`
}
// console.log(makeOrder("Malai Chai", "Hasan"))


// 1. Type inference
// identity function types
let cups = Math.random() > 0.5 ? 10 : "5"
// console.log(cups)

// identify assignable types
let chaiType = "Masala Chai"
// chaiType = 1111


// 2. Type Annotation

let ChaiNumber: number = 10        /* small case a type likhte hoy*/
let ChaiFlavor: string = "Adrak Wali"
ChaiFlavor = "Malai Chai"
// ChaiFlavor =12               [ etai error dibe]

// Union type 
let employees: "waiter" | "teaMaker" | "manager" = "waiter";  /* jekhane ekadhik data type hote parbe */
employees = "teaMaker"
// console.log(employees)

/* use api request er modes a hote pare*/

let apiRequest: "pending" | "failed" | "success" | "error" = "pending"
apiRequest = "failed"
// apiRequest = " failed"   even kono space thaklew error dibe

// any Type         [dhore nibe je jekono type hote parbe]
let orderNumber = ["12", "14", "23", "30"]
let currentOrder: any;
// let currentOrder : string ; ekhane error dibe je Variable 'currentOrder' is used before being assigned.

// let currentOrder : string | undefined; /* etatew error dibe na */
for (const order of orderNumber) {
    if (order === "23") {
        currentOrder = order

    }
}
// console.log(currentOrder)

//  unknown type        [shurute any er moto achoron kore ,mane type declare na korlew error dey na. but use korar age obosshoi type ditei hobe.]
// documentation : https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type

function isStringArray(arr: unknown): arr is string[] {
    /* 
Array.isArray(arr) — value-টি array কি না check করে।
arr.every(...) — array-এর প্রতিটি element-এর জন্য condition check করে।
typeof item === "string" — প্রতিটি element string কি না check করে।
arr is string[] — function true return করলে TypeScript-কে জানায় যে arr একটি string array। 
*/
    return (
        Array.isArray(arr) &&
        arr.every((item) => typeof item === "string")
    );
}

// console.log(isStringArray(["Tea", "Coffee"])); // true
// console.log(isStringArray(["Tea", 10]));       // false
// console.log(isStringArray("Masala Chai"));     // false
// console.log(isStringArray([1, 2, 3]));         // false
// search difference between any and unknown in typescript

function chaiBreak(breaks: number | string): unknown {
    if (typeof breaks === "number") {
        return ` tea break is at ${breaks}PM`
    }
    return `tea break is at ${breaks}`
}

// console.log(chaiBreak('10PM'))
// console.log(chaiBreak(10))

// any laganor por kono kivhu return na korle error ashe na but unknown er time a ashe 
function chaiSize(size: "small" | "medium" | "large" | number): unknown {
    // ekhane typeof use hobe na karon egulo default type na
    if (size === "small") {
        return `small cutting chai`
    } else if (size === "medium") {
        return `medium cutting chai`
    } else if (size === "large") {
        return `small cutting chai`
    } else {
        return `chai size is ${size}`
    }
}
// console.log(chaiSize("small"))
// console.log(chaiSize(10))

// Making Class

class MalaiChai {
    // Class-এর ভেতরে function-কে সাধারণত method বলা হয়।
    serve() {
        return "Malai Chai is served"
    }
}
class GingerChai {
    serve() {
        return "Ginger Chai is served"
    }
}

// instanceof chara korle and short form.
// function chai (chaiType : MalaiChai | GingerChai):string {
//    return `${chaiType.serve()}`
// }

// instanceof use kore korle
function chai(chaiType: MalaiChai | GingerChai): string {
    if (chaiType instanceof MalaiChai) {
        return `${chaiType.serve()}`
    } else if (chaiType instanceof GingerChai) {
        return `${chaiType.serve()}`
    }
    return `there is no chai type. order default chai`
}
console.log(chai(new MalaiChai()))
console.log(chai(new GingerChai()))


// making customize type
type chaiOrder = {
    type: string
    sugar: number
    withMalai: boolean
}

function isChaiOrder(obj: any): obj is chaiOrder {
    // type checking
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" &&
        typeof obj.withMalai === "boolean"
    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Chai type is ${item.type}, sugar: ${item.sugar}, ${item.withMalai ? "with Malai" : "no Malai"
            }`;
    }
    return `Simple chai order: ${item}`;
}

// console.log(
//     serveOrder({
//         type: "Masala Chai",
//         sugar: 2,
//         withMalai: true
//     })
// );

// console.log(serveOrder("Regular Chai"));

// type  manupulating and narrowing
type masalaChai = {
    type: "masala"
    spiceLevel: number
}
type gingerChai = {
    type: "ginger"
    amount: number
}
type elaichiChai = {
    type: "elaichi"
    arroma: number
}
// এখানে curly brackets ({ }) ব্যবহার করা হয়নি কারণ আপনি কোনো Object Type ডিফাইন করছেন না, বরং একটি Union Type ডিফাইন করছেন।
type chai = masalaChai | gingerChai | elaichiChai

function makeChai(order: chai) {
    // switch Statement 
    switch (order.type) {
        case "masala":
            return `${order.type} is served  made with ${order.spiceLevel}`
        case "elaichi":
            return `${order.type} is served made with ${order.arroma}`
        case "ginger":
            return `${order.type} is served made with ${order.amount}`

        default:
            break;
    }
}

function menu(order: masalaChai | gingerChai) {
    // যখন কোনো অবজেক্টে নির্দিষ্ট type প্রপার্টি দিয়ে Discriminated Union করা থাকে না বা অন্য কোনো প্রপার্টি চেক করতে হয়, তখন "propertyName" in object ব্যবহার করা একটি খুব প্রফেশনাল ও পারফেক্ট অ্যাপ্রোচ।
    if ("spiceLevel" in order) {
        return `${order.type} chai is served made with spice level ${order.spiceLevel}`;
    } else if ("amount" in order) {
        return `${order.type} chai is served made with ${order.amount}g ginger`;
    } else {
        return `there is no chai in menu`
    }
}

console.log(makeChai({ type: "masala", spiceLevel: 5 }))
console.log(menu({ type: "masala", spiceLevel: 5 }))
console.log(menu({ type: "ginger", amount: 10 }))

// একে informalভাবে forceful type assertion বলা হতে পারে, তবে TypeScript-এর official terminology হলো Type Assertion।

let responce: any = "success"
// Type Assertion মানে TypeScript-কে type সম্পর্কে বলা, value-কে convert করা নয়।
let numericLength: number = (responce as string).length
console.log(numericLength)

type book = {
    name: string
}
let bookString = '{"name":"The Great Gatsby"}'
/**
 * এখানে দুটি কাজ হচ্ছে:
- JSON.parse(bookString) — JSON string-কে JavaScript object-এ convert করছে।
- as book — TypeScript-কে বলছে, এই value-টিকে book type হিসেবে treat করো।
 * 
 */
let bookObj = JSON.parse(bookString) as book //1st

// দুটিই লেখা যায়। তবে একটি গুরুত্বপূর্ণ পার্থক্য আছে:
// - প্রথমটিতে as book দিয়ে Type Assertion করা হয়েছে।
// - দ্বিতীয়টিতে : book দিয়ে Type Annotation করা হয়েছে।
// let bookObj:book=JSON.parse(bookString) //2nd
console.log(bookObj.name)

// DOM 
const inputElement = document.getElementById("username") as HTMLInputElement

// any and unknown

let value: any;
value = 24244
value = "nkdv vd v"
value = 3.6
value = true
value.toUpperCase()

let newValue: unknown;
newValue = 24244
newValue = "nkdv vd v"
newValue = 3.6
newValue = true
// newValue.toUpperCase()       ekhane error dibe

if (typeof newValue === "string") {
    newValue.toUpperCase()
}


// try catch block safety checks
try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log("Error", error)
}

const data: unknown = "typescript revision"
// const strData: string= data /*ekhane evabe dile error dibe */
const strData: string = data as string

// never type

type roles = "admin" | "user" | "guest"
function redirectToRolebasedDash(role: roles) {
    if (role === "admin") {
        console.log("redirecting to admin dash")
        return
    } else if (role === "user") {
        console.log("redirecting to user dash")
        return
    } else if (role === "guest") {
        console.log("redirecting to guest dash")
        return
    }
    role;  //etar type hobe never karon ekhane kono value return korbe na. mane role er value 3 ta type er modhye thakbe. tai ekhane never type hobe
}

// interfaces and type alias


// evabe korle readable hoy na. tai interface or type alias use kora valo
// function getChaiDetails(chai: { type: string; sugar: number; withMalai: boolean }) { } 
// function getChaiDetails2(chai: { type: string; sugar: number; withMalai: boolean }) { }

type getChai = {
    type: string;
    sugar: number;
    withMalai: boolean
}
// type দিয়ে একটি reusable type তৈরি করতে পারো।
function getChaiDetails (order :getChai) {
    console.log(`${order.type}`)
}

function getChaiDetails2 (order :getChai) {
    console.log(`${order.type}`)
}

type teaRecipe={
    water: number;
    milk:number
}

// implements teaRecipe — TypeScript-কে বলছে, এই class-কে teaRecipe-এর structure মেনে চলতে হবে।
class makeChai2 implements teaRecipe{
    water=100;
    milk=50;
}

// interface evabe likhte parbo
interface teaRecipe2{
    water: number;
    milk:number
}

// customize data type er khetre interface

interface cupSize{
    size: "small" | "medium" | "large";
}

class makeChai3 implements cupSize{
   size: "small" | "medium" | "large"="small"
}

const chai2 = new makeChai3();

console.log(chai2.size); // "small"

// Kintu jodi 100 ta chai-er order thake? Prottekbar object likhte hobe. Eita aro easy korar jonno class use korte pari.
class Chai4 {
    name: string;
    price: number;

    // prottek chai-er name ar price alada hobe. Kono chai 50 taka, kono chai 30 taka. // Tokhon class-er vitore constructor use korte pari.
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
// new Chai()
// Oi blueprint diye notun object banay.
const chai5 = new Chai4("Malai Chai", 50);
const chai6 = new Chai4("Masala Chai", 30);

console.log(chai5.name);  // Malai Chai
console.log(chai5.price); // 50

console.log(chai6.name);  // Masala Chai
console.log(chai6.price); // 30

// constructor holo special method, ja new Chai(...) diye object create korar somoy automatically call hoy.

// constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
// }


/**
 *class Chai {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
 * Ekhane chai1.serve() call korle method-ta current object-er name use kore message return kore.
    serve() {
        return `${this.name} is served!`;
    }
}

const chai1 = new Chai("Malai Chai");

console.log(chai1.serve());
// Malai Chai is served!
 */

type BaseChai={teaLeafs: number}
type Extra={masala:boolean}
type ChaiType=BaseChai & Extra

const cup:ChaiType={
    teaLeafs:10,
    masala: true
}

// optional values

type User={
    username:string;
    bio?:string
}

const u1:User={
    username:"Hasan",
}
const u2:User={
    username:"Omit",
    bio:"hello iam Omit hasan"
}

// readonly  value

type Config={
 readonly appName:string;
 description:string ;

}

const cfg:Config={
    appName:"OM Hasan",
    description:"hello iam Omit hasan"
}

// cfg.appName="New Name"  // ekhane error dibe karon appName readonly
cfg.description="New Description"  // ekhane error dibe na karon description readonly na

