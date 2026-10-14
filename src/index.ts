/* small case a type likhte hoy*/

function getChai (items : number | string) {
    /* cotation diye type check korte hoy*/
    if ( typeof items === "string") {
        return items.toUpperCase()
    }
    return items;
}
console.log(getChai('masala chai'))
console.log(getChai(10))

function makeOrder (orders : string , customer : string): string {
    return `Order for ${customer} ; his order is ${orders}`
}
console.log(makeOrder("Malai Chai","Hasan"))
// Union type
let employees : "waiter" | "teaMaker" | "manager" = "waiter" ;
employees = "teaMaker"
// console.log(employees)


// 1. Type inference
// identity function types
let cups = Math.random() > 0.5 ? 10 : "5"
console.log(cups)

// identify assignable types
let chaiType = "Masala Chai"
// chaiType = 1111


// 2. Type Annotation

let ChaiNumber : number = 10        /* small case a type likhte hoy*/
let ChaiFlavor : string = "Adrak Wali"
ChaiFlavor = "Malai Chai"
// ChaiFlavor =12               [ etai error dibe]



