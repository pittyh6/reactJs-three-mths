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