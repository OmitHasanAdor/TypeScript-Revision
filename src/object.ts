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

// use of partial
// Partial<order> — সব property optional করে দেয়।
const updateOrder=( orders : Partial<order>)=>{
    // JavaScript/TypeScript-এ কোনো Object-কে সরাসরি Template Literal (`...`) বা String-এর ভেতরে ঢোকালে সেটি আউটপুটে [object Object] হিসেবে প্রিন্ট হয়।  chai with [object Object]
    // console.log(`chai with ${orders}`)

    console.log("Updating order with:", orders);

}

// // আপনি শুধুমাত্র items পাঠিয়েছেন, বাকি id এবং address না পাঠালেও Partial-এর কারণে কোনো Error দেয়নি!
updateOrder({items: [{name:'ginger',quantity:3}]})
// problem hocche এটাও valid hobe er khetre
updateOrder({});

type ChaiOrder={
    name: string;
    quantity:number;
    isHot: boolean;
    ingrediants: string[];
    secretIngrediants?:string;
}

// Required<ChaiOrder> — সব property required করে দেয়।
    // Required
const placeOrder=(order: Required<ChaiOrder>)=>{
    console.log("placing order with:", order);
}
placeOrder({
    name:'ginger',
    quantity:3 ,
    isHot:true,
    ingrediants:['ginger','sugar','milk'],
    //  secretIngrediants?:string[] optional holew require use korar fole etaw call kortei hobe
     secretIngrediants: "special spice mix"
})

// Pick
// Pick<ChaiOrder, "name" | "isHot" > — নির্দিষ্ট property বেছে নেয়।
type ChaiInfo =Pick<ChaiOrder, "name" | "isHot" >
const placeOrderWithPick:ChaiInfo = {
      name:'ginger',
    isHot:true
}

// Omit<ChaiInfo, "secretIngrediants"> — নির্দিষ্ট property বাদ দেয়।
// Omit 
type PublicChai= Omit<ChaiInfo, "secretIngrediants">


