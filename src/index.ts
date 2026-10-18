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

function serveOrder (item : chaiOrder | string) {
   if (isChaiOrder(item)) {
        return `Chai type is ${item.type}, sugar: ${item.sugar}, ${
            item.withMalai ? "with Malai" : "no Malai"
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

// type  manupulating
type masalaChai ={
    type: "masala"
    spiceLevel: number
}
type gingerChai ={
    type: "ginger"
    amount: number
}
type elaichiChai ={
    type: "elaichi"
    arroma: number
}

