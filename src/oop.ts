// class with constructor

class Chai{
    name: string;
    // price: number

    // constructor( name: string , price: number){
    //     this.name=name,
    //     this.price=price
    // }
     constructor( name: string){
        this.name=name,
        // this.price=price
        // this take point kore je object banacche
        console.log(this)
    }
}

// const chaiDetails = new Chai('Masala',20)
const chaiDetails = new Chai('Masala')

// access modifier

