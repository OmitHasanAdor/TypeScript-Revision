// only params type defines
function makeChai (type :string , cup: number) {
    console.log(`Making ${cup} cups of ${type}`)
}
makeChai("Malai Chai",2)

// only return value type defines
function getChaiPrice ():number {
    return 35
}

// void

// TypeScript-এ void মানে হলো কোনো function নির্দিষ্ট কোনো value return করে না।
function logChai(): void {
    console.log('chai is readey')
}

// optional params declare  [egulo function er end a declare kora good practice]

// function orderChai (item? :string) {
//      console.log(`${item} chai is readey`)
// }

// default value diyew kora jay          [egulo function er end a declare kora good practice]
function orderChai (item:string ="Masala") {
     console.log(`${item} chai is readey`)
}

function createChai (order:{
    type: string;
    sugar: number;
    size: "small" | "medium" | "large";
}) {
    return `Your ${order.size} ${order.type} chai with ${order.sugar} sugar is ready!`
}

