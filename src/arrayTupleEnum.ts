// Array
// একই ধরনের বা নির্দিষ্ট type-এর একাধিক value রাখার জন্য ব্যবহার হয়।
// number er jonno
let prices: number[] = [50, 100, 150];
// string er jonno
let chaiNames: string[] = ["Masala", "Ginger", "Milk"];

const rating: Array<number> = [4.5, 5, 3.5, 3, 4]

// Array of objects
type chaiList = {
    name: string;
    price: number;
    isHot: boolean
}

const chaiOrder: chaiList[] = [
    {
        name: "ginger",
        price: 25,
        isHot: true
    },
    {
        name: "elaichi",
        price: 35,
        isHot: true
    },
    {
        name: "cold tea",
        price: 50,
        isHot: false
    }
]

// readonly array
const bestCheifs: readonly string[]=['Hasan', 'Omit', 'Ador']
// bestCheifs.push('Rasel') // ❌ Error dibe! readonly array te push kora jabe na

// multi dimensional array
// two dimensional array
const tables: number [][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]