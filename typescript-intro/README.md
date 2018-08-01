# Intro to Typescript
[Back to Home](/README.md)

1. [Setup TypeScript](#1-setup-typescript)
2. [Types & Interfaces](#2-types--interfaces)
3. [Classes](#3-classes)
4. [Modules](#4-modules)

TypeScript is a superset of JavaScript that compiles to plain JavaScript

*Translation*: We can write our code using advanced language features then run it through a process that turns it into regular JavaScript so it will run in any browser.

**What kind of "advanced language features"?**
- **Static Types**: We can specify exactly what properties and methods our objects and classes should have
    - One of the best benefits of static types is the tooling it enables (like Intellisense in VS Code)
- **Arrow Functions**: A short hand for creating functions. Also helps wrangle the dreaded `this`
- **Async/Await**: Allows us to more elegantly represent asynchronous code. An alternative/supplement to Promises and callbacks.
- **Modules**: Allows us to split our code into separate encapsulated files and import them as necessary.
- Most modern EcmaScript features

## 1. Setup TypeScript
#### Install
To install TypeScript, open up a terminal and run:
```
npm install -g typescript
```

#### Create a `.ts` file
Next, create a new file with a `.ts` extension.
*logger.ts*
``` typescript
function log(message) {
    console.log("LOGGER", message)
}
log("Hello there");
```

#### Compile
In a terminal, `cd` into the same directory as your `logger.ts` file and run:
```
tsc logger.ts
```
- Did it run successfully?
- Did it create a new file?
- Notice any differences between the 2 files?
    - *Hint*: it's a trick question

[Click here](http://www.typescriptlang.org/play/index.html) to experiment more with TypeScript compiling

## 2. Types & Interfaces
### Type Annotations
In TypeScript you specify somethings type by appending `:TYPE`.  For example we could type our `log` function above.

``` typescript
function log(message:string) : void {
    console.log("LOGGER", message)
}
log("Hello there")
```
### Common System Types
- `string` - text
- `number` - Integers or Decimals
- `boolean` - true/false
- `Array` - collection, `string[]`, `number[]`
- `Date` - Date and Time
- `void` - functions that return nothing
- `any` - used when you don't know the type or want to be flexible


> There are more than this, but they are the same data types that exist in JavaScript proper.

Try updating your version of `logger.ts` and re-running the compiler. 
- Did the output change?

### Custom Types (Interfaces)
Often we end up passing complex objects around.  An `interface` allows us to specifically define what properties and methods a complex object has.

Lets update our `log` method to support taking in an object that contains both a `message` and `severity`.
``` typescript
interface LogEntry {
    message: string,
    severity: string,
}

function log(entry: LogEntry) : void {
    console.log(entry.severity, entry.message)
}

log({ severity: "Info", message: "Hey there" })
```

Update your `logger.ts` to the above and recompile

- Is the interface in the JS output?

We can make optional/nullable properties by adding a `?` right before the type annotation
*Make `severity` optional*
``` typescript
interface LogEntry {
    message: string,
    severity?: string,
}
```

### Exercise: Create an AnnouncementItem Interface
Let's say we have a SharePoint list to store company Announcements.  When we query the list using the REST API, we get a JSON response that looks like this:

```
[
    {
        "Id": 6,
        "Title": "2018 Summer Picnic & Q3 Info Share",
        "Summary":
            "Our 2018 Summer Picnics will be combined again with our Q3 Info Sharing this summer.\u200b \t \u200b\u200bPlease complete this Attendance SURVEY by Aug 7.",
        "CategoryId": 3,
        "Publish": "2018-07-26T05:00:00Z",
        "Expires": "2018-09-20T05:00:00Z",
        "Icon": null,
        "ID": 6
    },
    {
        "Id": 4,
        "Title": "Congratulations Martinez Family!",
        "Summary":
            "Brandon, Joy and big brothers, Perry & Seth, welcomed sweet baby girl Poppy Noelle to the world yesterday, June 6th!",
        "CategoryId": 1,
        "Publish": "2018-07-26T05:00:00Z",
        "Expires": "2018-11-26T06:00:00Z",
        "Icon": null,
        "ID": 4
    }
]
```
1. Go to the online [TypeScript Playground](http://www.typescriptlang.org/play/index.html).
2. Copy and paste the code above into your typescript file and use it to create a variable named, `items`.
3. Create a TypeScript interface, `AnnouncementItem`, that accurately represents an announcement in `items`.
4. Create a function named `showTitles` that takes an `Array` of type `AnnouncementItem` and loops through them to `console.log` the `Title`.
5. Call the `showTitles` function and pass the `items` variable.
6. Click the **Run** button on the right.
    - It should open a popup window
    - Open the browser developer tools, `F12`
    - Do you see the titles logged to the console?

*Extra Credit*: Update the code so you are working with real `Date` objects
- *Hint*: `Array.map`
- *Hint*: `new Date(string)`

## 3. Classes
A `class` allows us to define something as set of methods and properties.  With this `class` definition, we can easily create many instances of that "something". 

### Class Syntax
``` typescript
class Logger {
    // class Property definition
    prefix: string

    constructor(prefix:string) {
        this.prefix = prefix
    }

    // class Method
    log(message:string) {
        console.log(this.prefix, message);
    }
}

let warningLogger = new Logger("Warning");
warningLogger.log("Uh oh...")
```
- The constructor is optional

### Class Inheritance
We can create child classes that get all the methods and properties from their parent, but then add or tweak things.  We inhererit using the `extends` keyword.

> Inheriting with `extends` also works on an `interface`

*An `InfoLogger` class that inherits from `Logger`*
``` typescript
class Logger {
    prefix: string
    constructor(prefix:string) {
        this.prefix = prefix
    }
    log(message:string) {
        console.log(this.prefix, message);
    }
}

class InfoLogger extends Logger {
    constructor() {
        super("Info");
    }
}

let infoLogger = new InfoLogger();
infoLogger.log("Hiya")
```
- We don't need to implement the `log` method or the `prefix` property because it comes automatically by "extending" `Logger`
- We use `super` to call the parent class's constructor

### Exercise: Create some Dog Classes
We want to be able to create instances of "dogs". They should all have a name and breed and be able to `bark()`.  If it is a Golden Retriever, it should be able to `fetch(ball)`. If it is a Bull Dog, it should be able to `sleep(duration)`.
1. Go to the online [TypeScript Playground](http://www.typescriptlang.org/play/index.html).
2. Create a class, `Dog`
    - Should have a `breed` property of type `string`
    - Should have a `name` property of type `string`
    - Should set the `breed` and `name` in the constructor
    - Should have a `bark` method that `console.log`'s the name
3. Create a `GoldenRetriever` class
    - Should inherit from `Dog`
    - Should have a method named `fetch` 
        - Should take a param named `ball`, of type `string`
        - Should return a `string` in the format of "Here you go: {ball}"
4. Create a `BullDog` class
    - Should inherit from `Dog`
    - Should have a method named `sleep`
        - Should take in a param named `duration` of type `number` (milliseconds)
        - Should pause for `duration`(milliseconds) using `setTimeout`, then `console.log("I'm awake")`
5. Create instances of each of the Dog classes
    - Invoke each of their methods
6. SAVE THIS CODE SOMEWHERE! 
    - We are going to use it in the next exercise

*Extra Credit*
- Create a `Chihuahua` class that overrides the parent `bark()` method to say, "Yo quiero Taco Bell"

## 4. Modules
Modules allow us to split our code up into digestible (encapsulated) chunks.  With modules we can import and export these chunks of code throughout our project.

In the past we would either:
- Put all out code in a single JavaScript file. This could be thousands of lines.
- Split it into multiple files and then add a `script` tag for each. 
    - The problem was that some files depended on others, and you needed to manage that with the order of your `script` tags.
    - Each script tag was a network request which slows down the site.

### Default Import/Export
Lets say we have a couple utility functions for working with the DOM. We want to put them in a file `domUtils.ts` and then be able to import those functions elsewhere in the project
``` typescript
function getElements(selector) {
    return [].slice.call(document.querySelectorAll(selector), 0);
}

function removeElement(elem) {
    if (elem) {
        let parentElem = elem.parentNode;
        if (parentElem) parentElem.removeChild(elem);
    }
}

function addStyle(elem, styles) {
    let styleAttributes = Object.keys(styles);
    styleAttributes.map(function(key) {
        elem.style[key] = styles[key]
    })
    return elem;
}

let domUtils = { getElements, removeElement, addStyle }
export default domUtils;
```
- `export default` means we are exporting a primary thing (in this case the `domUtils` object)

We can then consume the `domUtils` functions in a different file
``` typescript
import domUtils from "./domUtils"

let profilePhotos = domUtils.getElements("img.profile-photo");
```

### Named Import/Export
We also have the option of exporting items more granularly/specifically.  Instead of exporting the entire `domUtils` object, we could export the functions individually so that they could be imported individually. This allows us to potentially trim the size of our codebase.

``` typescript
export function getElements(selector) {
    return [].slice.call(document.querySelectorAll(selector), 0);
}

export function removeElement(elem) {
    if (elem) {
        let parentElem = elem.parentNode;
        if (parentElem) parentElem.removeChild(elem);
    }
}

export function addStyle(elem, styles) {
    let styleAttributes = Object.keys(styles);
    styleAttributes.map(function(key) {
        elem.style[key] = styles[key]
    })
    return elem;
}
```
- All we have to do is put the `export` keyword before each function to make it consumable.

To perform a named import, we wrap the name in curly braces, `import { myThing } from "./thePlace"`

``` typescript
import { getElements } from "./domUtils"

let profilePhotos = getElements("img.profile-photo");
```
- Now we only pull in the single function 
- Our codebase gets 17 lines smaller by not leaving out the other 2 functions.

As a rule of thumb, if your module exports a single thing (like a Class), then use a default export, otherwise use named exports.

> There are tradeoffs to default vs named import/exports. Named can save you space, but if you are pulling a dozen functions from the same file, your import statement can get pretty unruly.

### Exercise: Moduluarize the Dog Classes
Turn each class you created in the previous exercise into it's own module.

1. Create a `.ts` file for each dog class
2. Create an `entry.ts` file and create instances of the classes and invoke their methods.
3. Run the TypeScript compiler 
    - `tsc entry.ts`
