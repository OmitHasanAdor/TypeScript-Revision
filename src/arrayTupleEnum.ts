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
const bestCheifs: readonly string[] = ['Hasan', 'Omit', 'Ador']
// bestCheifs.push('Rasel') // ❌ Error dibe! readonly array te push kora jabe na

// multi dimensional array
// two dimensional array
const tables: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Tuple 

// Array-এর মতো, কিন্তু প্রতিটি position-এ কোন type-এর value থাকবে, তা নির্দিষ্ট করে দেওয়া যায়।
let chaiType: [string, number, boolean];
chaiType = ["Masala", 25, true]

// optional Tuple
let user: [string, number, boolean?];
user = ['omit', 20]

// readonly Tuple
const postCodeAndRoadNum: readonly [number, number] = [1211, 3]

// named Tuple
const chaiOrderDetails: [name: string, prices: number, isHot: boolean] = ["Masala", 25, true]
