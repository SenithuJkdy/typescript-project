// example modular function
const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
console.log(hello())

// number add
let n1:number,n2:number;

n1 = 34;
n2 = 20;

console.log(n1+n2+5);

// explicitited data types in Typescript

const isLoggedIn: boolean = true;
const age: number = 35;
const pi: number = 3.14;
const title: string = "Typescript is a syntactic superset of Javascript which adds static typing.."

// 4. bigint
// Represents very large integers (both positive and negative) that cannot be represented by the number type.

let largeNumber: bigint = 9007199254740991n; // Note the `n` suffix
let negativeBigInt: bigint = -1234567890123456789n;

// 5. symbol
/* Creates a unique and immutable value, often used as object property keys.*/

let uniqueKey: symbol  = Symbol("description");
let anotherKEy: symbol = Symbol("description");

console.log(uniqueKey === anotherKEy) // false

let a:number,b:number;
a=5
b=5
console.log(a === b); //true
//


const id = Symbol("id");
const name = Symbol("name")

const user = {
  [name]: "Alice",
  [id]: 12345, // Using a symbol as a property key
  isActive: true
};

console.log(user[id]); // 12345
console.log(user[name]); // "Alice"
// console.log(user[isActive])  // give errors 
// console.log(user.isActive)  // true 
// console.log(user["id"]); // undefined (symbols are not accessible via string keys)


// Implicit
let firstName: any = "Peter";
firstName = 10 // true

let lastName = "Peter";
// lastName = 10 --> false. cuz 'any' data type not provided.

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json  = JSON.parse('55')

// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json) // number


//             TypeScript Special Types
// we can't assign any values again that don't have "any type"
let u: any = true;
u = "string"
console.log(Math.round(u))


// Type: unknown

/* Unknown is a similar, but safer alternative to any.
  TypeScript will prevent unknown types from being used
*/

let w: unknown = 1;
console.log(typeof w)

w = "string"; // no error
/*
unknown is best used when you don't know the type of data being typed. 
To add a type later,you'll need to cast it.

Casting is when we use the "as" 
keyword to say property or variable is of the casted type.
 */

// let x: never = true;  --> error
let y: undefined = undefined;
let z: null = null;



// Arrays in TypeScript

const names: string[] = [];  // create empty array
names.push("Peter","Parker");
// names.push(3) --> give errors

console.log(names)

// readonly arrays cant'be reassignable or changed
const fruits: readonly string[] = [];
// fruits.push("Apple")



//  Type Inference

// TypeScript can infer the type of an array if it has values.

const numbers = [1,2,3]
numbers.push(4);
console.log(numbers);

// numbers.push("3")   --> gives an error

// assign exiting array value to a variable
let head: number =  numbers[0];
console.log(head);

// number sort in array

const nums = [12,4,9,5,20,2,8];

// nums.sort(
//     function(a,b){
//       return a-b;
//     }
// )

nums.sort((a,b)=> a-b)

console.log(nums);


// TypeScript Tuples -->  Typed Arrays

// A tuple is a typed array with a pre-defined length and
//  types for each index.

let ourTouple: [ number, boolean, string ];
ourTouple = [ 7, true, "Hello there,"];
// touples only can pass the values if it's in the same 
// format and same order
console.log(ourTouple)

// ReadOnly Tuple

// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values

ourTouple.push("Somthing went wrong.."); 
// no type safety in tuple for indexes 3+ so it's been added.
console.log(ourTouple)

// define a readonly tuple

const ourReadonlyTuple: readonly [number, boolean, string] = [ 4, false, "whatsapp"];
// ourReadonlyTuple.push() --> not works

// Named Tuples
const graph: [x:number, y: number] = [44.3, 55.6]
console.log(graph[0])

// Tuples Destructuring
const graph_ex: [number, number] = [55.2, 41.3];

const [no1, no2] = graph_ex
console.log(no1)

// The order of value types does not matter for Tuples ?
// No it's must be in same way & same format.

// Javascript Object

const fruit = {
  name: "banana",
  color: "yellow"
}

//  Typescript Objects

const car: { type: string, model: string, year:number} ={
  type: "Toyota",
  model: "Premio",
  year: 2003
}

console.log(car.type);

// Type Inference

const phone = {
  modle: "Google",
  type: "Pixel 6"
}
phone.type = "Pixel 7" // no error

console.log(phone); // { modle: 'Google', type: 'Pixel 7' }

// phone.type = 3 --> error 

// that's becauce the ts can infer the types of properties 
// based on their values.

// Optional Properties
const bike: { type: string, mileage?: number } =
{
  type: "Honda"
}
bike.mileage = 2000
console.log(bike)

// Index Signatures
// Index signatures can be used for objects without a defined list of properties

const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25;
nameAgeMap.Peter = 20;
// nameAgeMap.Mark = "Fifty" gives an error

console.log(nameAgeMap)


// TypeScript Enums

/* 
An enum is a special "class" that represents a group of constants (unchangeable variables).
Enums come in two flavors string and numeric. Lets start with numeric.
*/

// Numeric Enums - Default --> By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections{
  North,
  East,
  South,
  West
}

let currentDirection = CardinalDirections.North;

console.log(currentDirection) // logs 0

// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and 
// have it auto increment from that:

// enum CardinalDirections{
//   North = 1, --> This line
//   East,
//   South,
//   West
// }

console.log(CardinalDirections.North) // logs 1
console.log(CardinalDirections.West)  // logs 4

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound) // logs 404
console.log(StatusCodes.Success) //  logs 200

// String Enums

enum Colors{
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
console.log(Colors.Blue) // 'blue'



//* TypeScript Type Aliases and Interfaces

// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// custom name => an Alias

// Type Aliases can be used for primitives 
// like string or more complex types such as objects and arrays
// Type alias also can be defined as Custom Types

type CarYear = number
const ex_var: CarYear = 2001; // must assign a value after custom type

type CarType = string
type CarModel = string

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2000
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"

const car_detail: Car = {
  year: carYear,
  type: carType,
  model: carModel
}

// using custom types we can pre-defined the structure of
// variables,obbjects and arrays in the typescript



// Interfaces

// Interfaces are similar to type aliases, 
// except they only apply to object types.

// interface only used to create pre-defined type objects

interface Rectangle {
  height: number,
  width: number
}
const rectangle: Rectangle = {
  height: 20,
  width: 10
}

// Interfaces Extending
// means that the creating new interface with same 
// properties as the original, plus something new.

interface ColoredRectangle extends Rectangle{
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
}

// TypeScript Union Types
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

// OR |
function printStatusCode( code: string | number | boolean ){
  console.log(`My status code is ${code}`)
}
printStatusCode(404)
printStatusCode("404")

// Union Type Errors

// Note: you need to know what your type is when union 
// types are being used to avoid type errors:

// function printNumber( code: string | number ){   // error
//   console.log(`My status code is ${code.toUpperCase()}`)
// }


// TypeScript Functions

function getTime(): number {
  return new Date().getDate();
}
console.log(getTime());

const arrowGetDate = (): number => new Date().getDate(); // arrow function
console.log(arrowGetDate());

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type
// if the function doesn't return any value void can be used

function printHello(): void{
  console.log("Hello");
}
printHello();

const arrowHello = (): void =>{
  console.log("Hello form arrow");
}
console.log(arrowHello())

// Function with Parameters

function multiply( a: number, b: number): number{
  return a * b;
}
console.log(multiply(2,2));

const arrowMul = ( a: number, b: number): number=> { return a * b };
console.log(arrowMul(3,3));

// If no parameter type is defined, TypeScript will default to using any,
//  unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

function add( a:number, b:number, c?:number){
  return a + b + (c || 0)
}
console.log(add(2,3)) // logs 5

const arrowAdd = (a:number, b:number, c?:number):number=> a + b + (c || 0)
console.log(arrowAdd(2,3,4)) // logs 9

// Default Parameters
// For parameters with default values, the default value goes after the type annotation:

function pow( value: number, exponent: number = 10){
      return value ** exponent;
}
console.log(pow(2)); // 2^10 = 1024
console.log(pow(2,2)); // 2*2 = 4

const arrowPow = ( value:number, exponent: number = 5)=> 
  value ** exponent;

console.log(arrowPow(2))

// Named Parameters
// Typing named parameters follows the same pattern as typing  normal parameters.

function divide({ dividend, divisor}:{dividend: number, divisor: number}){
  return dividend / divisor;
}

console.log(divide({dividend: 10, divisor: 2}));

const arrowDivide = ({divd , divsr}:{divd: number, divsr:number}) => divd / divsr
// for a named prams function we have to pass values as a JSON object with function parameters
console.log(arrowDivide({ divd: 10, divsr: 2 }));

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function restAdd(a:number, b: number, ...rest: number[]){
  return a + b + rest.reduce((x,y)=> x + y, 0);
}
console.log(restAdd(10,10,10,10,10)) // logs 50

const numlist = [1, 2, 3, 4, 5];

const sum = numlist.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, ""); // ,0 -> number

console.log(sum); // Output: 15
console.log(typeof sum); // Output: 15

// Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.


// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`

type Negate = (value: number) => number;  // define the type

const negateFunction: Negate = (value) => value * -1;  
// Inherits it properties to the actual function

console.log(negateFunction(50));

// Typescript Casting

// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// 'as' keyword will be used

let x: unknown = 'hello';
console.log((x as string).length)
console.log(typeof x)

let nmb1: unknown = '3';

let xz: unknown = 4;
console.log((xz as string).length); 
// prints undefined since numbers don't have a length

// Casting with <>

let x1: unknown = 'hello';
console.log((<string>x1).length); // This type not works with TSX when in the react.

//  Force Casting 

// let x3 = 'hello';
// console.log(((x3 as unknown) as number).length); 
// x is not actually a number so this will return undefined


// Classes in Typescript 

class Person{
   private fname: string;
   lname?: string;  // without modifier
   // public
   // private
   // protected

   public constructor(name: string){
    this.fname = name;
   }

   public getFName(): string {
    return this.fname;
   }
}

const person = new Person("Jane");
person.lname = "Doe"

console.log(person); // Person { name: 'Jane' }
console.log(person.getFName()+" "+person.lname)
// person.fname isn't accessible from outside the class since it's private

// The this keyword in a class usually refers to the instance of the class. Read more about this here.

// Parameter Properties

class Book{
  private readonly price?: number;  // this cannot be changed
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

}
const book = new Book("Sherlock Holmes");
console.log(book.getName());

// Inheritence: implements

// interface can pre-intilized the methods and variables

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(
//     protected readonly width: number, 
//     protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// const myRect = new Rectangle(10,20);

// console.log(myRect.getArea());

interface Shape {
  getArea: () => number;
}

class RectangleCal implements Shape{

  public constructor(protected readonly width: number, 
                     protected readonly height: number){}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends RectangleCal{
  public constructor(width: number){

    super(width,width) // invoking super class
                       //  constructor

  }
  // getArea gets inherited from Rectangle
}

const mySqObj = new Square(20);
const myRectangleObj = new RectangleCal(10,20);

console.log(mySqObj.getArea()) // 400
console.log(myRectangleObj.getArea()) // 200


// Override

interface Shape{
  getArea: ()=> number;
}

class RectangleCalc implements Shape{
  public constructor(protected readonly width: number,
                     protected readonly height: number
  ) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string{
      return `Rectangle[width=${this.width}, 
                        height=${this.height}]`;
    }
}

const myRectangleCalObj =  new RectangleCalc(20,10);
console.log(myRectangleCalObj.getArea());
console.log(myRectangleCalObj.toString());
console.log(typeof myRectangleCalObj.toString());

class SquareCal extends RectangleCal{
    public constructor(width: number){
      super(width,width);
    }
    
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
}

const mySquareCalObj  = new SquareCal(30);
console.log(mySquareCalObj.getArea()) // 9000
console.log(mySquareCalObj.toString()) // 'Square[width=30]'


// TypeScript Basic Generics

function createPair<S, T>(v1: S, v2: T): [S, T]{
  return [v1, v2];
}

console.log(createPair<string, number>('hello', 42));
console.log(createPair<number, string>(24, 'world'));

// Generic Classes

class NamedValue<T>{
  private _value: T | undefined;

  constructor(private name:string) {}

  public setValue(value: T){
    this._value = value;
  }

  public getValue(): T | undefined{
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
let value =  new NamedValue<number>("myNumber");
console.log(value); // NamedValue { name: 'myNumber', _value: undefined }

value.setValue(10);
console.log(value.toString()); // 'myNumber: 10'

// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.



// Type Aliases

type Wrapped<T> ={ value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
// This also works with interfaces with the following syntax: interface Wrapped<T> {

// Extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}


// Typescript Utility Types
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// Partial -> changes all the properties in an object to be optional.

interface Point{
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}
// `Partial` allows x and y to be optional

pointPart.x = 10;
console.log(pointPart.x) // 10
console.log(pointPart.y) // undefined

// Required -> Required changes all the properties in an object to be required

interface Van{
  make: string;
  model: string;
  mileage?: number; // total distance travalled by a vehicle
}

let myVan: Required<Van> = {
  make: 'Toyota',
  model: 'Caravan',
  mileage: 12000 // `Required` forces mileage to be defined
}
console.log(myVan); // { make: 'Toyota', model: 'Caravan', mileage: 12000 }


// Record -> is a shortcut to defining an object type with a specific key type and value type.

const nameAgedMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
}
nameAgedMap.Daniel = 23;
console.log(nameAgedMap); //{ Jack: 25 }
//  Record<string, number> is equivalent to { [key: string]: number }  in the index signatures



// Omit  -> removes keys from an objective type

interface Person1{
  name: string,
  age: number,
  location?: string,
  isMarried: boolean
}

const bob: Omit<Person1, 'age' | 'location'> = {
  name: 'Bob',
  isMarried: true
}
console.log(bob)
// `Omit` has removed age and location from the type and they can't be defined here


// Pick -> removes all but keep the specified keys from an objective type.

const stark: Pick< Person1, 'name'> = {
  name: 'Stark',
}

console.log(stark)


// Exclude --> removes types from a union.

type Primitive = string | number | boolean
// const ex_value: Exclude<Primitive,string> = true;
const ex_value: Exclude<Primitive,string> =  true || 34 ;
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof ex_value);

// ReturnType ->  extracts the return type of a function type.

type PointGenerator = ()=> { x: number; y: number;  };
const point: ReturnType<PointGenerator>={
  x: 10,
  y: 20
};

console.log(point); // { x: 10, y: 20 }

// Parameters  -> extracts the parameter types of a function type as an array.

type PointPrinter = (p: { x: number; y: number; }) => void;

const point2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
}
console.log(point2)

// Readonly ->  is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
// cannot modified after assigned a value

interface Person2{
  name: string,
  age: number
}

const person2: Readonly<Person2> = {
  name: "Robert",
  age: 23
};
// person2.name = "Israel" // error TS2540: Cannot assign to 'name' because it is a read-only property.


// ---------------------   //
// Partial, Required, Record, Omit, Pick, Exclude, ReturnType, Parameters, Readonly
// ---------------------   //


 // TypeScript Keyof

// keyof is a keyword in TypeScript which is used to extract the key type from an object type.  like 'typeof'


interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed

interface Person3 {
  name: string;
  age: number;
}

// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person3, property: keyof Person3) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person3 = {
  name: "Max",
  age: 27
};

printPersonProperty(person3, "name"); // Printing person property name: "Max"s

// keyof with index signatures
// can also be used with index signatures to extract the index type.

type StringMap = { [key: string]: unknown};
// `keyof StringMap` resolves to `string` here

function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
console.log(createStringPair("age",'25'));

// TypeScript Null & Undefined

// TypeScript has a powerful system to deal with null or undefined values.

// By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.

// The rest of this page applies for when strictNullChecks is enabled.


// null and undefined are primitive types and can be used like other types, such as string.

let value_ex: string | undefined | null = null;
value_ex = 'hello';
value_ex = undefined;

console.log(value_ex);

// Optional Chaining

// Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties.

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House){
  const yardSize = house.yard?.sqft;
  if(yardSize === undefined){
    console.log('No yard');
  }else{
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
}
printYardSize(home);

// Nullish Coalescence  --> ??
// It's simillar to && operator. if the value not present other one will shown

const printMileage = (mileage: number | null | undefined)=> {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null); // 'Mileage: Not Available' 
printMileage(100);  // 'Mileage: 100'

// Null Assertion

const getValue = (): undefined | string  =>{
  return 'hello';
}
let value_1 = getValue();
console.log("value length: " + value_1!.length); 
// 'value length: 5'
// Just like casting, this can be unsafe and should be used with care.

let array: number[] =  [1,2,3];

console.log(typeof array); // object

let arr_value = array[0];
console.log(arr_value);


// Template Literal Types

type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

// Usage:
let myColor: HexColor<"blue"> = "#0000FF";
console.log(myColor); // '#0000FF'


// Index Signature Labels

// Index Signature Labels allows us to label index signatures using computed property names. It helps in providing more descriptive type information when working with dynamic objects.

// type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// Usage:
// let obj: DynamicObject = { dynamic_key: "value" };

