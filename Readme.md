# TypeScript Revision Notes

> Beginner-friendly notes for revising TypeScript concepts, commands,
> and OOP. Examples are kept short, with comments explaining what each
> part does.

## 1. Setting Up a TypeScript Project

Run these commands in your project folder:

``` bash
# 1. Create package.json with default settings
npm init -y

# 2. Install TypeScript as a development dependency
npm install -D typescript

# 3. Generate tsconfig.json
npx tsc --init

# 4. (Optional) Install ts-node if you want to run TypeScript files directly
npm install -D ts-node

# 5. Install Node.js type declarations when using Node.js APIs
npm install -D @types/node
```

### Compile and run TypeScript

``` bash
# Compile TypeScript files using the settings in tsconfig.json.
# JavaScript output is usually written to the configured outDir.
npx tsc

# Compile and run one TypeScript file directly (requires ts-node).
npx ts-node src/index.ts
```

**Difference:**

-   `npx tsc` compiles TypeScript into JavaScript. It does not normally
    run the resulting program.
-   `npx ts-node src/index.ts` runs a TypeScript file through `ts-node`,
    which transpiles it for execution. It can depend on compatibility
    between the installed TypeScript and ts-node versions.
-   After compiling, run the generated JavaScript file with Node.js, for
    example: `node dist/index.js` (if `dist/index.js` is the output
    path).

## 2. Type Annotation vs. Type Inference

### Type Annotation

You explicitly write the type.

``` ts
// The parameter is a string and the function returns a string.
function greet(name: string): string {
    return `Hello, ${name}`;
}
```

### Type Inference

TypeScript figures out the type from the assigned value.

``` ts
// TypeScript infers that 'age' is a number.
let age = 20;

// TypeScript infers that 'language' is a string.
let language = "TypeScript";
```

**Remember:** Annotation = you write the type. Inference = TypeScript
figures it out.

## 3. `any` vs. `unknown`

Both can hold values of different types, but they behave differently.

``` ts
let flexible: any = "hello";

// 'any' disables many type checks.
// This can compile even though the operation may fail at runtime.
flexible.toUpperCase();

let safeValue: unknown = "hello";

// TypeScript requires you to check the type before using
// a value of type 'unknown' in a type-specific way.
if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase()); // Safe after narrowing
}
```

-   `any`: turns off much of TypeScript's type checking. Use it
    sparingly.
-   `unknown`: accepts any value, but you must narrow or check its type
    before using it in a type-specific way.

Reference: [TypeScript 3.0 ---
`unknown`](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type)

## 4. `type` vs. `interface`

Both can describe the shape of an object.

### Using `type`

``` ts
// Create a reusable type alias.
type Tea = {
    water: number;
    flavor: string;
};

const masalaTea: Tea = {
    water: 200,
    flavor: "Masala"
};
```

### Using `interface`

``` ts
// Describe the required properties of an object.
interface TeaInfo {
    water: number;
    flavor: string;
}

const gingerTea: TeaInfo = {
    water: 150,
    flavor: "Ginger"
};
```

-   `type` creates a type alias. It can describe objects, unions,
    intersections, primitives, tuples, and more.
-   `interface` is commonly used to describe object shapes and class
    contracts. Interfaces can be extended and can be declaration-merged.

## 5. `implements`

`implements` checks that a class satisfies an interface's required
structure. It does not automatically create the properties or methods;
the class must provide them.

``` ts
interface TeaMachine {
    start(): void;
    stop(): void;
}

class ChaiMachine implements TeaMachine {
    start(): void {
        console.log("Machine started");
    }

    stop(): void {
        console.log("Machine stopped");
    }
}
```

## 6. What Is a Class?

A **class** is a blueprint for creating objects. It can contain
properties (data), methods (functions), and a constructor (initial
setup).

``` ts
class Chai {
    // Property: each Chai object has its own flavor.
    flavor: string;

    // Constructor runs when a new object is created.
    constructor(flavor: string) {
        this.flavor = flavor;
    }

    // Method: an action that a Chai object can perform.
    describe(): void {
        console.log(`This is ${this.flavor} chai.`);
    }
}

const masala = new Chai("Masala"); // Create an object
masala.describe(); // Call the method
```

### Why use methods?

Methods define actions or behavior related to an object. For example, a
`Chai` object might have methods such as `describe()`, `heat()`, or
`serve()`.

### What does the constructor do?

The constructor runs when you create an object with `new`. It
initializes the object's starting data.

In TypeScript, a parameter property can shorten the code:

``` ts
class ChaiOrder {
    // 'public flavor: string' declares a property
    // and assigns the constructor argument to it automatically.
    constructor(public flavor: string) {}
}

const order = new ChaiOrder("Ginger");
console.log(order.flavor); // Ginger
```

## 7. Access Modifiers: `public`, `private`, `protected`

``` ts
class ChaiDetails {
    public flavor: string;
    private secretIngredient: string;
    protected shopName: string;

    constructor(flavor: string, secretIngredient: string, shopName: string) {
        this.flavor = flavor;
        this.secretIngredient = secretIngredient;
        this.shopName = shopName;
    }

    revealSecret(): void {
        // Private properties can be accessed inside their own class.
        console.log(this.secretIngredient);
    }
}

class SpecialChai extends ChaiDetails {
    showShop(): void {
        // Protected properties can be accessed in a subclass.
        console.log(this.shopName);
    }
}

const chai = new ChaiDetails("Masala", "Elaichi", "Chai Wala");
console.log(chai.flavor); // Allowed: public
chai.revealSecret(); // Allowed: method accesses private field internally

// chai.secretIngredient; // Error: private
// chai.shopName; // Error: protected
```

-   `public`: accessible from outside the class, as well as inside it.
-   `private`: accessible only inside the declaring class (TypeScript
    access restriction).
-   `protected`: accessible inside the declaring class and its
    subclasses, but not directly from outside.

JavaScript also supports true runtime-private fields using `#`, for
example `#secretIngredient`.

## 8. Inheritance: `extends`

`extends` lets a class inherit properties and methods from another
class. It can also let one interface extend another interface.

``` ts
class Drink {
    serve(): void {
        console.log("Drink served");
    }
}

class Chai extends Drink {
    addSpices(): void {
        console.log("Spices added");
    }
}

const masala = new Chai();
masala.serve();      // Inherited from Drink
masala.addSpices();  // Defined in Chai
```

## 9. Polymorphism

**Polymorphism** means that different classes can provide their own
implementations of the same method, while code can work with them
through a shared parent type.

``` ts
class Drink {
    make(): void {
        console.log("Making a drink");
    }
}

class Chai extends Drink {
    override make(): void {
        console.log("Making chai");
    }
}

class Coffee extends Drink {
    override make(): void {
        console.log("Making coffee");
    }
}

function prepareDrink(drink: Drink): void {
    // The implementation that runs depends on the actual object.
    drink.make();
}

prepareDrink(new Chai());   // Making chai
prepareDrink(new Coffee()); // Making coffee
```

## 10. Abstraction

**Abstraction** means exposing what an object must do while hiding or
leaving the implementation details to a more specific class.

An `abstract class` cannot be instantiated directly. A child class must
implement its abstract methods.

``` ts
abstract class Drink {
    // Every concrete child class must implement make().
    abstract make(): void;

    serve(): void {
        console.log("Serving the drink");
    }
}

class Chai extends Drink {
    make(): void {
        console.log("Making chai");
    }
}

const chai = new Chai();
chai.make();  // Making chai
chai.serve(); // Serving the drink

// const drink = new Drink(); // Error: abstract class cannot be instantiated
```

**Remember:** Abstraction defines what is required; a concrete child
class supplies the implementation.

## 11. Generics

Generics let you write reusable functions, interfaces, and classes that
work with different types while preserving type safety.

``` ts
// T is a type parameter. The input and return value have the same type.
function identity<T>(value: T): T {
    return value;
}

identity("Masala"); // TypeScript infers T as string
identity(50);       // TypeScript infers T as number
identity(true);     // TypeScript infers T as boolean
```

Another example:

``` ts
// T[] means an array whose items have type T.
// This function returns the first item from that array.
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

getFirst(["Masala", "Ginger"]); // string | undefined
getFirst([10, 20, 30]);         // number | undefined
```

## 12. Installing Library Type Declarations

Some JavaScript libraries provide their own TypeScript types. Others use
declaration packages from DefinitelyTyped.

``` bash
# General pattern — replace libraryName with a real package name:
npm install -D @types/libraryName

# Example: Node.js type declarations
npm install -D @types/node

# Common React type packages (usually needed in React projects
# that don't already receive these types from their setup)
npm install -D @types/react @types/react-dom
```

**Important:** Do not install `@types/...` automatically for every
library. First check whether the library already includes its own
TypeScript declarations. For example, Axios includes its own types, so
you normally only need:

``` bash
npm install axios
```

## Quick Revision

  -----------------------------------------------------------------------
  Concept                             Meaning
  ----------------------------------- -----------------------------------
  `npx tsc`                           Compile TypeScript according to
                                      `tsconfig.json`

  `npx ts-node src/index.ts`          Run a TypeScript file through
                                      ts-node

  Type annotation                     Explicitly write a type

  Type inference                      TypeScript infers a type from a
                                      value or context

  `unknown`                           Accepts any value, but requires
                                      type checking before type-specific
                                      use

  `type`                              Creates a type alias

  `interface`                         Describes an object shape or
                                      contract

  `implements`                        Checks that a class satisfies an
                                      interface

  `class`                             Blueprint for creating objects

  `constructor`                       Initializes a new object's data

  `method`                            A function defined on a
                                      class/object

  `extends`                           Inherits from a class or extends an
                                      interface

  Polymorphism                        Shared method call, different
                                      class-specific behavior

  Abstraction                         Defines required behavior while
                                      hiding implementation details

  Generics                            Reusable code that preserves type
                                      information

  `@types/...`                        Community type declarations for
                                      packages that don't ship their own
                                      types
  -----------------------------------------------------------------------
