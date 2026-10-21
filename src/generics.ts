function wrapInArr <T> (items : T): T {
    console.log(`the array is ${items}`)
    return items
}

wrapInArr<string>("Masala"); // string
wrapInArr<number>(50);       // number
wrapInArr<boolean>(true);    // boolean
wrapInArr("Masala"); // string
wrapInArr(50);       // number

function pair<A,  B>(a:A , b:B): [A,B] {
    // return [b,a]  [eta evabe rakhle error dibe karon return value a A age chilo B pore chilo]
    return [a,b]
}
// jekono data type diyei call kora jay. যখন একই function বা structure দিয়ে বিভিন্ন type-এর data নিয়ে কাজ করতে চাও, তখন Generic ব্যবহার করবে।
pair('masala', 20)
pair('masala', {})
pair('masala', "ginger")
pair('masala', true)

interface Box<T>{
    content:T
}

const boxDetails:Box<string>={content: 'Black Box'}
const numberBox:Box<number>={content: 10}

// generic shob cheye beshi use hoy api responce a , form er data handle korar khetre. jekono data type handle kora jay.

// api response er khetre
interface ApiPromise<T>{
    status:number;
    data: T
}

const res: ApiPromise<{flavour:"Masala"}>={
    status:200,
    data: {flavour:"Masala"}
}