interface Chai{
    name:string;
    price:number;
    isHot:boolean;
}
const Ginger : Chai={
    name:'ginger',
    price:25,
    isHot:true
}

interface Shop{
 readonly id:number
 name: string
}

const s:Shop ={
    id:1,
    name:"Hasan"
}
// s.id=2    [eta error dibe karon eta readonly]

interface DiscountCalc{
    // parameter type define and return type define
    (price:number):number
}
const discApply50:DiscountCalc=(price)=>{
 return price*0.5
}

// Object-এর Type Checking
interface TeaMachine{
    // start(price:number):void
    start():void
    stop():void
}

const machine:TeaMachine={
    start(){
        console.log("start")
    },
    stop() {
        console.log("stop")
    }
}

// index signature
interface ChaiRatings{
    /*
    flavour → শুধু একটি নাম, বোঝানোর জন্য দেওয়া হয়েছে।
string → property-এর key অবশ্যই string হতে হবে।
number → প্রতিটি property-এর value অবশ্যই number হতে হবে।
    */
    [flavour: string]:number
}

const ratings: ChaiRatings={
    // JavaScript object-এ সাধারণ বৈধ property name লিখতে quotation mark লাগে না। তবে value হিসেবে string দিলে error হবে:
    masala: 4.5,
    ginger:5
}

// interface automatically merge hoye jay

interface User{
    name :string
}
interface User{
    age  :number
}
const u1:User={
    name:"Hasan",
    age:21
}

// interface extends another interface
interface A{
    a:number
}
interface B{
    b:number
}
interface C extends A,B{}


