# Intro to Typescript
TypeScript is a superset of JavaScript that compiles to plaing JavaScript

*Translation*: We can write our code using advanced language features then run it through a process that turns it into regular JavaScript that will run in any browser

**What kind of "advanced language features"?**
- **Static Types**: We can specify exactly what properties and methods our objects and classes should have
    - One of the best benefits of static types is the tooling it enables (like Intellisense in VS Code)
- **Async/Await**: Allows us to more elegantly represent asynchronous code. An alternative/supplement to Promises and callbacks.
- **Modules**: Allows us to split our code into separate encapsulated files and import them as necessary.

## 1. Setup TypeScript
#### 1. Install
To install TypeScript, open up a terminal and run:
```
npm install -g typescript
```

#### 2. Create a `.ts` file
Next, create a new file with a `.ts` extension.
*logger.ts*
``` typescript
function log(message) {
    console.log("LOGGER", message)
}
log("Hello there");
```

#### 3. Compile
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
- `string`
- `number`
- `boolean`
- `Array`
- `Date`
- `any`
- `null`
- `void`


> There are more than this, but they are the same data types that exist in JavaScript proper.

Try updating your version of `logger.ts` and re-running the compiler. 
    - Did the output change?

### Custom Types (Interfaces)
A lot of times we end up passing complex objects around.  An `interface` allows us to specifically define what properties and methods a complex object has.

Lets update our `log` method to support taking in an object that contains both a message and severity.
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

- Is the interface in the output?

## 4. Classes

## 5. Modules