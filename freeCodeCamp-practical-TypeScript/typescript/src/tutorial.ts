//Types

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

//Union type
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

// Arrays
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