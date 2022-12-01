
/* 

**************************TYPESCRIPT TUTORIAL*************************

*******************************VARIABLES*******************************

const hello = "world";

*******************************FUNCTIONS*******************************

You must specify the type of the arguments 
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Monster", "Lessons"));

*******************************INTERFACES*******************************

A special entity in TS to create objects with properties
The "?" questionmark let the propertie usage be optional


interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string
}

*******************************OBJECTS*******************************

Object uses the interface for properties

const user: UserInterface = {
    name: 'Monster',
    age: 3,
    getMessage() {
        return 'Hello' + name;
    },
};
    
const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return 'Hello' + name;
    },
};

console.log(user.getMessage)

*******************************Union & Type Aliases in TS*******************************

To store more than one datatype inside a element:

Union operator: |

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffe']

const dragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageName: String | number = "1";

let errorMessage: string | null = null;

let user: UserInterface | null = null; 

let someProp: string | number | null | undefined | string[] | object

/*

*******************************VOID*******************************

void is a data type when the function does't returns anything
THIS IS VOID:
const doSomething = (): void => {
    console.log("doSomething");
}; 


*******************************ANY*******************************

the worst type in typescript
you can say that you propertie is any to don't get any error:

let foo: any = "foo";
console.log(foo.bar());

(TS will just ignore it)

*******************************NEVER*******************************

Funtion that never end 

const doSomething = (): never => {
    throw "never";
}; 

*/
/*
*****************************TS WITH DOM************************
Define the correct types of our DOM elements

Use the "as" word to say what type the element is

let page: any = "1";
let pageNumber = page as string;

someElement is a type defined inside TS - super generic class

const someElement = document.querySelector(".foo") as HTMLInputElement;

//console.log('someElement', (someElement.value);
    
someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value);
})


*****************************CLASSES*****************************

Classes are sugar around PROTOTYPES

Whith 'THIS.' we can access all properties inside the Class

We can also use CONSTRUCTOR with data as parameters in it

**********readonly***********
Read only property
When you want to create some constant inside your class you only need to use this word
You can't change it

*********INTERFACES*********

Classes can implements interfaces // must implements iterface's Properties

*********static properties***********
the propertie only apply for the class itself

*********INHERITANCE****************
Create a child class using the word "extends" to reference to the other class and inherents everything.

*/

// interface UserInterface {
//     getFullname(): string;
// }

// class User implements UserInterface {
//     firstName: string;
//     lastName: string;
//     readonly unchangableName: string;
//     static readonly maxAge = 50


//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.unchangableName = firstName;
//     }

//     changeUnchangableName(): void {
//         /* this.unchangableName = "foo"; */
//     }

//     getFullname(): string {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// class Admin extends User {

//     /* user is of type User and User is a Class */

//     const user = new User('Monster', 'lessons');
//     console.log(user.firstName);
//     console.log(User.maxAge);

//     const admin = new Admin('Foo', 'Bar')
//     console.log(admin.firstName)
    
// }

/*

****************************GENERICS***************************
We use <T> as a generic DataType
If 
*/

/* A funtion addId get as a argument an object;
returns a object with properties and write inside Id;
Generate the id;
Merge the object with the returned Id and generate a function.
You need to provide a type for the object (to don't be ANY) const addId has a generic <T> type

We can use "enum" as a value and a data type

const updatedArray = append<string>("baz", ["foo", "bar"]);

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id,
    };  
};

interface UserInterface<T, V> {
    name: string;
    data: T;
    meta: V;
    
}

const user: UserInterface <{ meta: string}, string> = {
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta:"bar",
};

const result = addId<UserInterface>(user);
console.log('result', result)

*/

