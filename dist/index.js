"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(items) {
    if (typeof items === "string") {
        return items.toUpperCase();
    }
    return items;
}
console.log(getChai('masala chai'));
console.log(getChai(10));
function makeOrder(orders, customer) {
    return `Order for ${customer} ; his order is ${orders}`;
}
console.log(makeOrder("Malai Chai", "Hasan"));
//# sourceMappingURL=index.js.map