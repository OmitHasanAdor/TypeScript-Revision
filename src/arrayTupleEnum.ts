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

// unexpected tuple behaviour
let tup:[string, number, boolean] = ["Masala", 25, true]
// tup.push("Ginger") // ❌ Error dibe na! unexpected behaviour. tuple er size fixed thakbe, but push kora jabe.


// enum

enum CupSize {
    Small,
    Medium,
    Large
}

const size=CupSize.Medium
console.log(size) // 1

// Auto-incremental Enum
// Auto-incremental Enum মানে TypeScript-এ Enum-এর numeric value স্বয়ংক্রিয়ভাবে বাড়তে থাকা।
enum orderStatus{
    /*
    প্রথম value ডিফল্টভাবে 0 থেকে শুরু হয়। পরের প্রতিটি value আগেরটির চেয়ে 1 বেশি হয়। নিজে value দিলে পরেরটি সেখান থেকে বাড়ে।
    */
    Pending=100,
    Deliverd,
    Cancelled,
    NotOrdered
}

// String Enum
enum ChaiType{
    Masala= "Masala",
    Ginger="ginger",
    Malaia='malai',
    Elaichi='elaichi'
}

function chaiList ( type : ChaiType) {
    console.log(`Your ${type} chai is ready!`)
}

chaiList(ChaiType.Masala)
chaiList(ChaiType.Ginger)
// chaiList("masala"); // Error dibe 

// eta good practice na. jekono ek dhoroner data type e enum a rakha uchit
enum RandomEnum{
    Id=1,
    Name='Hasan'
}

// using const variable

const enum ChaiSize{
    Low=1,
    Medium=2,
    High
}

function selectChaiSize (size :ChaiSize) {
    console.log(`Your chai size is ${size}`)
}

selectChaiSize(ChaiSize.High)
