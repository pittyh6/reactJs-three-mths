//VARIABLE TYPES

let name: string = "Priscila"
name = "other"
name = name.toUpperCase()
console.log(name)
let amount:number = 36
amount = 36 -1
console.log(amount)
let isAwesome:boolean = false
isAwesome = true
console.log(isAwesome)
// Challenge
// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference
let nickname:string = "Pitty"
nickname = nickname.concat(" ", name)
console.log(nickname)
let number:number = 2025
number = number - 2049
console.log(number)
let isValid:boolean = false
console.log(!isValid ? "is true" : "is false")


//--------------------------------------------------------------------

//UNION TYPE
let tax:number | string = 10
tax = "$11"
let requestStatus: 'pending'|'success'|'error' = "pending"
requestStatus = 'success'
let notSure: any = 10
notSure= "maybe a string"
notSure = true

const books = ['1984', 'Brave new World', 'Fahrenheit 451']
let foundBook: string | undefined;
for( let book of books){
    if(book === 'Brave new World'){
        foundBook = book
        break
    }
}
console.log(foundBook);
// Challenge
// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'delivered'
orderStatus = 'shipped'
let discount:number | string = 20
discount= '20%'


//--------------------------------------------------------------------

// ARRAY
let prices: number[] = [100, 72, 83, 76]
prices.push(67)
let fruits: string[] = ['apple', 'pineapple', 'strawberry']
console.log(fruits)
let array:(string|boolean)[]=["yes", true, "no", false]
console.log(array)
// Challenge
// Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
// Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
// Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
let temperatures:number[] = [17,21,26,35]
//temperatures.push("food")
let colors: string[]=['orange', 'pink', 'purple']
//colors.push(true)
let mixedArray:(number|string)[]=[83,'old',2,'young']
//mixedArray.push(true)
console.log(temperatures, colors, mixedArray)


//--------------------------------------------------------------------

// OBJECT
let car: {brand:string; year:number;} = {brand: 'toyota', year: 2023}
car.brand = "MG"
console.log(car)

let book = {title: "FantasticLand", cost: 20}
let pen = {title: "fabercastel", cost: 10}
let notebook = {title: "capricho"}
let item: {title: string; cost?: number}[] = [book, pen, notebook]
console.log(item)
// Challenge
// Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
// Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
let bike: { brand: string; year: number } = {brand: "Caloy", year:2022}
console.log(bike);
let laptop:{ brand: string; year?: number } = {brand:"mac"}
console.log(laptop);
let itemOne = { title: "cream", price: 23}
let itemTwo = { title: "toner", price: 43}
let products:{ title: string; price?: number }[] = [itemOne, itemTwo, { title: "cream", price: 23}]
products.push({title:'shoes'})
console.log(products)

//--------------------------------------------------------------------

//FUNCTIONS
function sayHi(name: string){
    console.log(`Hello to ${name.toUpperCase()}`)
}
sayHi("maria")

function calculateDiscount(price:number):number{
    const hasDiscount = true;
    if(hasDiscount){
        return price;
    }
    return price * 0.9;
}
const finalPrice = calculateDiscount(200)
console.log(finalPrice);
// Challenge
// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.
const arrayOfName: string[] = ['Priscila', 'carlos', 'Jane']

function checkArray(name:string):boolean{
   return arrayOfName.includes(name)
}
let newName = 'carlos'
if(checkArray(newName)){
    console.log(`${newName} is in the list`);
}else{
    console.log(`${newName} is not in the list`);
}

function calculatePrice(price:number, discount?:number):number{
    return price - (discount || 0)
}

let priceAfterDiscount = calculatePrice(100, 20)

function calculateScore(initialScore: number, penaltyPoints: number = 0){
    return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100, 20)
let scoreWithoutPenalty = calculateScore(100)

//REST PARAMETER
function sum(message:string, ...numbers:number[]):string{
    const doubled = numbers.map((num) => num * 2)
    console.log(doubled)

    let total = numbers.reduce((prev, current) => {
        return prev + current
    },0)
    return `${message}${total}`
}
let result = sum('The total is: ', 1, 2, 3, 4, 5)
console.log(result)

//void function means the function will not return a value
function logMessage(message:string):void{
    console.log(message);
}
logMessage('I am to sleep')


//FUNCTION USING UNION TYPES AS FUNCTION PARAMETERS

// Challenge
// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input:string | number){
    if(typeof input === 'number'){
        console.log(input * 2);
    }
    else{
        console.log(input.toUpperCase());
        
    }
}

processInput(10)
processInput("hiiiii")

//with objects
function createEmployee({id}:{id:number}):{id:number; isActive: boolean}{
    return {id, isActive: id%2 ===0}
}
const first = createEmployee({id:1})
const second = createEmployee({id:2})
console.log(first, second);

//with objects alternative
function createStudent(student:{id:number; name:string}):void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}
const newStudent = {id: 5, name: 'anna'}

createStudent(newStudent)
createStudent({id: 1, name: 'Pitty'})

// Challenge
// Your task is to create a function named processData that accepts two parameters:

// The first parameter, input, should be a union type that can be either a string or a number.
// The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
// The function should behave as follows:

// If input is of type number, the function should return the square of the number.
// If input is of type string, the function should return the string in uppercase.
// If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.
function processData(input: string | number, config: { reverse: boolean } = { reverse: false }): string | number {
    if (typeof input === 'number') {
        return input * input;
    } else {
        return config.reverse ? input.toUpperCase().split('').reverse().join('') : input.toUpperCase();
    }
}    
console.log(processData(10)); // Output: 100
console.log(processData('Hello')); // Output: HELLO
console.log(processData('Hello', { reverse: true })); // Output: OLLEH


//--------------------------------------------------------------------

//ALIAS AND INTERFACE

type User = { id: number; name: string; isActive: boolean };

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
}

type StringOrNumber = string | number;
let value: StringOrNumber
value = 'hello'
value = 1234

type Theme = 'dark' | 'light'
let theme: Theme
theme = 'dark'
theme = 'light'

function setTheme(t:Theme){
    theme=t
}
setTheme('dark')

// Challenge
// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

// Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// Create a Union Type: Define a type Staff that is a union of Employee and Manager.

// Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

// Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

// Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
type Employee = {id:number; name:string; department:string}
type Manager = {id:number; name:string; employees:Employee[]}
type Staff = Employee | Manager

function printStaffDetails(staff:Staff):void{
    if('employees' in staff){
        console.log(`${staff.name} is a manager of ${staff.employees.length}`);
    }else{
        console.log(`${staff.name} is an employee in the department: ${staff.department}`);
    }
}

let marta:Employee = {
    id:1, name:"Marta", department:'DPC Team'
}
let lauren:Employee = {
    id:2, name:"Louren", department:'ES'
}
let carlos:Manager = {
    id:3, name:'Carlos', employees:[marta, lauren]
}
printStaffDetails(marta)
printStaffDetails(carlos)

//INTERSECTION TYPE
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
id: 2,
name: 'How to Cook a Dragon',
price: 15,
};

const book2: Book = {
id: 3,
name: 'The Secret Life of Unicorns',
price: 18,
};

const discountedBook: DiscountedBook = {
id: 4,
name: 'Gnomes vs. Goblins: The Ultimate Guide',
price: 25,
discount: 0.15,
};

//TYPE ALIAS - COMPUTED PROPERTIES
const propName = 'age';

type Animal = {
[propName]: number;
};

let tiger: Animal = { [propName]: 5 };

//INTERFACE - FUNDAMENETALS
interface Books {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
}
    
const deepWork: Books = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
};
    
deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed
    
    
//INTERFACE METHOD
interface Booking {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    // method
    printAuthor(): void;
    printTitle(message: string): string;
    }
    
    const deepWorks: Booking = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor() {
    console.log(this.author);
    },
    printTitle(message) {
    return `${this.title} ${message}`;
    },
    };
    deepWorks.printAuthor();
    const results = deepWorks.printTitle('is an awesome book');
    console.log(results);
    
    //INTERFACE - METHODS (MORE OPTIONS)
    interface Booked {
        readonly isbn: number;
        title: string;
        author: string;
        genre?: string;
        // method
        printAuthor(): void;
        printTitle(message: string): string;
        printSomething: (someValue: number) => number;
        }
        
        const deepWorked: Booked = {
        isbn: 9781455586691,
        title: 'Deep Work',
        author: 'Cal Newport',
        genre: 'Self-help',
        printAuthor() {
        console.log(this.author);
        },
        printTitle(message) {
        return `${this.title} ${message}`;
        },
        // first option
        // printSomething: function (someValue) {
        // return someValue;
        // },
        // second option
        printSomething: (someValue) => {
        // "this" gotcha
        console.log(deepWorked.author);
        return someValue;
        },
        // third option
        // printSomething(someValue) {
        // return someValue;
        // },
        // alternative
        // printAuthor: () => {
        // console.log(deepWorked.author);
        // },
        };
        console.log(deepWorked.printSomething(34));
        
        deepWorked.printAuthor();
        const resulted = deepWorked.printTitle('is an awesome book');
        console.log(resulted);
 // Challenge
 // Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
 // Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
 // Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
 // Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
 // Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
 // Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
 // Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
  interface Computer {
    readonly id:number; 
    brand:string; 
    ram:number; 
    storage?:number;
    upgradeRam(value:number):number
  }

  let newComputer:Computer = {
    id:123,
    brand:"Apple",
    ram:8, 
    upgradeRam(value){
        this.ram += value;
        return this.ram
    }
  }
  console.log(newComputer.upgradeRam(256))
 
 
 
  // Interface - Merging, Extend, TypeGuard
interface Person {
name: string;
getDetails(): string;
}

interface DogOwner {
dogName: string;
getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
age: number;
}

// Usage
const person: Person = {
name: 'John',
age: 30,
getDetails() {
return `Name: ${this.name}, Age: ${this.age}`;
},
};

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employees extends Person {
employeeId: number;
}

const employee: Employees = {
name: 'jane',
age: 28,
employeeId: 123,
getDetails() {
return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
},
};

// Interface multiple inheritance
interface Managers extends Person, DogOwner {
managePeople(): void;
}

const manager: Managers = {
name: 'Bob',
age: 35,
dogName: 'Rex',
getDetails() {
return `Name: ${this.name}, Age: ${this.age}`;
},
getDogDetails() {
return `Dog Name: ${this.dogName}`;
},
managePeople() {
console.log('Managing people...');
},
};
// Challenge - Part 1
// Define the Person interface Start by defining a Person interface with a name property of type string.
// Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.


// Enums
// Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

enum ServerResponseStatus {
Success = 200,
Error = 'Error',
}

interface ServerResponse {
result: ServerResponseStatus;
data: string[];
}

function getServerResponse(): ServerResponse {
return {
result: ServerResponseStatus.Success,
data: ['first item', 'second item'],
};
}

const response: ServerResponse = getServerResponse();
console.log(response);
// Enums - Gotcha : Reverse Mapping
// In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

// In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

enum ServerResponseStatus {
Successs = 'Success',
Errorr = 'Error',
}

Object.values(ServerResponseStatus).forEach((value) => {
console.log(value);
});
enum ServerResponseStatus {
Success = 200,
Errorr = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
if (typeof value === 'number') {
console.log(value);
}
});
enum NumericEnum {
Member = 1,
}

enum StringEnum {
Member = 'Value',
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

//let stringEnumValue: StringEnum = 'Value'; // This is not allowed
enum ServerResponseStatus {
Successss = 'Success',
Errorrr = 'Error',
}

function getServerResponse(): ServerResponse {
return {
// result: ServerResponseStatus.Success,
// this will not fly with string enum but ok with number
result: 'Success',
data: ['first item', 'second item'],
};
}