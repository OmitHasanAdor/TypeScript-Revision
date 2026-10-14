
function getChai (items : number | string) {
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

let cups = Math.random() > 0.5 ? 10 : "5"
console.log(cups)

