// object 

// Object-কে const দিয়ে ডিক্লেয়ার করার পেছনে মূল কারণ হলো Memory Reference-কে সুরক্ষিত রাখা।
type UserType = {
  name: string;
  role?: string;
  age?: number; // ? মানে অপশনাল (পরে যোগ করা যাবে)
};

const user: UserType = { name: "Omit", role: "developer" };
// অবজেক্টের ভেতরের ভ্যালু চেঞ্জ করা যাবে:
user.name = "Hasan"; 
// নতুন প্রপার্টি যোগ করা যাবে:
user.age = 22; 
// প্রপার্টি ডিলিটও করা যাবে:
delete user.role; 
console.log(user); // { name: "Hasan", age: 22 }

// object type define

let tea:{
    name :string,
    price: number,
    isHot : boolean
}
tea={
    name:"Green tea",
    price:40,
    isHot:true
}


type Tea={
    name:string;
    price:number;
    ingrediants: string[] 
}

const chai: Tea={
    name:"Ginger Tea",
    price:25,
    ingrediants: ['sugar', 'ginger', 'milk', 'tea leaf' ],
    // Object literal may only specify known properties, and 'isHot' does not exist in type 'Tea'.
    // isHot:true
}

// Duck Typing
type Cup={size: string}
let smallCup : Cup ={size:"200ml"}
let bigCup={ size: '500ml', material: "steel"}

smallCup = bigCup
// Duck Typing
type Brew ={brewTime:number}
const coffee={ brewTime: 20, beans: "Arabica"}
const chaiBrew : Brew = coffee

// Direct Object Literal (Excess Property Checking)
// ❌ Error dibe!
// let smallCup: Cup = { size: "500ml", material: "steel" }; 
// const chaiBrew: Brew = { brewTime: 20, beans: "Arabica" };

type Item ={ name: string ; quantity: number}
type Address={street: string; postCode:number}

type order={
    id: string;
    items: Item[];
    address: Address
}

