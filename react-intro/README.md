# Introduction to React
This exercise is meant to isolate React and Typescript development.
## 1. Open the Exercise
In the terminal, open the `react-intro` directory. Next, install all of the dependencies. Lastly, try running the web application.
``` bash
cd react-intro
npm install
npm run start
```
- Did the install run successfully?
- Did your browser pop open and show your web app running on `http://localhost:1234`? 
- Do you see the 'hello there' message?

1. Take a stroll through the code, specifically `index.html` and `src/entry.ts`.  
2. With the `npm run start` process is still active, try updating the 'hello there' message
    - Did your browser update the message for you automatically?

## 2. Create your first React Components

### You should know...
#### React is Component Based
The "React way" advises us to break down complex UI's into separate encapsulated components.  

Put less Computer Science'y: Break up the user interface into small pieces (components). Each component will be simpler because it focuses on only one thing. It also opens the door for component reuse.

#### JSX is HTML/JavaScript
One of the things people find jarring when starting with React is that we put the component's HTML (and sometimes styles) right inside the component's JS file. This feels weird because for the longest time, we have been conditioned to separate our HTML, JS, and CSS. 

React says, *"Nah, split your stuff out by components, not by file extensions, and then keep everything for that component together so it's easier to reuse"*.

The example below is a React component the renders a blue circle button with an Edit icon.  You can see that the component is just a `class` that inherits from `React.Component`.  The one rule to remember is that all **components must implement a `render` method**.


``` tsx
import * as React from 'react';

const EDIT_ICON_NAME = "Pencil"
export default class EditButton extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <i className={"ms-Icon ms-Icon--" + EDIT_ICON_NAME} />
            </div>
        );
    }
}

const styles = {
    container: {
        background: "blue"
        width: "30px",
        height: "30px",
        borderRadius: "50%",
    }
}
```
Inside the `render` method you probably noticed something that looks HTML. 
- But what are those curly braces? 
- And how can we have html inside a JS/TS file if it isn't wrapped in a quotes? It's certainly not valid JavaScript/TypeScript. 

Answer: JSX 

 > Did you notice when we add HTML classes to the `icon` tag, we use `className` instead of `class`? This is because `class` is a reserved keyword in javascript.

If you're curious how it works, when we run our `build` step, the transpiler turns the JSX into valid JavaScript function calls.

*The transpiler turns the first line into the second*
``` html
<div id="root">Hello world</div>;
React.createElement("div", { id: "root" }, "Hello world");
```
[Click here](http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DYUwLgBGAWCWB2BzCBeCAiA9vcB3TMATiCOgNwBQAPACawBuAfABIjDCYT6HA0QDeMBIgC-AoUhFUA9HSZkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&sourceType=module&lineWrap=false&presets=react%2Cstage-2&prettier=true&targets=&version=6.26.0&envVersion=1.6.2) to experiment with how JSX gets transpiled.

#### A custom Component can be rendered in another Component's JSX
Once we create a component, we can use it inside another component's JSX.

> *GOTCHA!* React components must be capitalized. It's how React tells the difference between native element and a custom component.

``` tsx
import * as React from 'react';

class Child extends React.Component {
    render() {
        return (
            <div>I'm a Child</div>
        );
    }
}
class Parent extends React.Component {
    render() {
        return (
            <div>
                <h2>I'm the Parent.</h2>
                <div>These are my kids:</div>
                <Child />
                <Child />
                <Child />
            </div>
        );
    }
```
- If the above were rendered to the page, what would you expect to see?

### **Exercise**: Create an App and AppHeader component
Create a brand new React component, `App`, to serve as your application's top level container. Then create an `AppHeader` component to display your app's title.

1. Create a new file, `src/App.tsx`
    - In TypeScript if you are creating a file that contains `JSX`, use the `.tsx` extension.
    - *More opinion than rule*: One component per file, and capitalize the filename.
2. Use the sample below to implement the component. 
    - For now render out an `h1` tag with your app's title
3. Import your `App` component into `entry.ts`.
    - Look back at the TypeScript tutorial if you need a refresh on importing a "default export".
4. Render your `App` component instead of the `div` element.
    - Do you see your app's title in the browser now?
5. Create another React component, `src/AppHeader.tsx`.
6. Move the `h1` tag from `App` to the `AppHeader`.
    - Change the text a little so you know it updated
7. Import `AppHeader` into `App` and render it.
    - Do you see the updated app title in the browser?

## 3. Working with `props`
In our exercise, we have the app's title hardcoded inside of `AppHeader`. But what if we wanted our `App` component to be able to tell `AppHeader` what the title should be?  

The most common/useful thing you'll find about React is how easy it is to pass parameters/arguments to child components. These are called `props`.

Let's say we wanted to enhance our previously referenced `EditButton`, to be a little more generic and powerful.  We want to be able to specify which Icon to show, and what should happen when we click the button.
``` tsx
import * as React from 'react';

export default class IconButton extends React.Component<IconButtonProps, {}> {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <i className={"ms-Icon ms-Icon--" + this.props.icon} />
            </div>
        );
    }
}

export interface IconButtonProps {
    icon: string,
    onClick: () => void
}
```
- At the bottom of our component file we define the "Props" interface. This is how are parent components can tell what they should pass in.
- Inside our component we can get access to prop values using `this.props.PROP_NAME` syntax.

Now that the `IconButton` accepts `props`, we can create an instances of the `IconButton` in a parent component and pass prop values. 
``` tsx
export default class ParentComponent extends React.Component {
    onAddItemClick = (event) => {
        console.log("You clicked the IconButton to ADD an item")
    }
    onRemoveItemClick = (event) => {
        console.log("You clicked the IconButton to REMOVE an item")
    }
    render() {
        return (
            <div>
                <IconButton icon="Plus" onClick={this.onAddItemClick} />
                <IconButton icon="Trash" onClick={this.onRemoveItemClick} />
            </div>
        );
    }
}
```
Even in this simple example we are already seeing great code reuse! The IconButton is ONLY responsible for what it looks like. It doesn't need to worry about the onClick logic.

### **Exercise**: Parameterize the App's Title
1. Update `AppHeader` to accept a `title` prop
    - *hint*: the `AppHeaderProps` interface defines what AppHeader accepts
2. Update `AppHeader` to render the `title` prop value
    - *hint*: access a prop value via `this.props.foo`
3. Update `App` to pass a `title` prop value to `AppHeader`
    - Change the title a little so you can tell it updated
    - Do you see the updated title in the browser?

## Working with `state`
We were successfully injected a parameterized `title` into our `AppHeader`, but the `title` value is still hardcoded inside the `App` component.  What happens if we have more dynamic data? 

The classic example is an 'increment count' app. It display a big number and a button. Then increments the number everytime you click the button.  In this scenario we obviously can't hardcode the click count in `App`, we need to "React" (\*groan\*).

If we are talking about dynamic data (typically obtained through user interaction or web service calls), then we are probably going to be working with `state`. React `state` is kind of like `props`, except:
- A React Component can NOT update it's own `props`. The parent always injects `props`.
- A React Component manages it's own `state`. A parent or sibling component should not be modifying another component's `state`.

> *HOW IT WORKS:* React re-fires the render function (effectively updating the UI), any time a component updates it's state or the parent injects updated `props`.

*Using React state to create an increment counter*
``` tsx
export default class IncrementApp extends React.Component {
    state = {
        count: 0
    }
    onClick = () => {
        let newCount = this.state.count + 1;
        this.setState({ count: newCount })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button type='button' onClick={this.onClick}>Increment</button>
            </div>
        );
    }
}
```
- Initialize `state` by adding a property to the Component class
    - This is a good place to set default values
    - See **Helpful snippets** below for an example
- Access state values via `this.state.BLAH`
- **DO** update state with the `setState` method
    - `this.setState({ count: this.state.count + 1})`
- **DON'T** update state with an expression
    - `this.state.count = this.state.count + 1`
    - This won't trigger a React update

> *PRO TIP*: A common pattern is to have a top-level component manage `state`, then pass the `state` values down as `props` to child components.  This way the child components can stay focused on the display, and the top-level component can focus on the logic & orchestration of dynamic data.

### **Exercise**: What time is it button?
We want to build a component that has a button we can click to show us the time.
1. Create a new React component named `CurrentTime`. 
    - For now just render some text so you can tell its working
2. Import `CurrentTime` into `App` and render it
    - Do you see your text in the browser?
3. Initialize `state` on `CurrentTime` and add a `time` property. 
4. Add an `onClick` method to the `CurrentTime` component and update `this.state.time` property;
    - Don't forget to use the `setState` method
    - *hint*: `new Date()` will give you an `Date` object that is set to 'now'.
    - *hint*: Date objects have a `toLocaleTimeString` method
5. Render a `button` with an `onClick` wired up to the method you created in step 4.
    - See the `IncrementApp` for a similar example
6. Render the current time inside an `h3`
    - Do you see your button in the browser?
    - Does the time show up once you click the button?

*Extra Credit*
1. Show the time right away, without waiting for the user to click
    - *hint*: We set default values when we initialize state
2. Auto update the time so we don't even have to click
    - *hint*: `componentDidMount`
    - *hint*: `setInterval`
3. Make it prettier by formatting the timestamp w/ `date-fns`

## Helpful Snippets

*New TypeScript React component*
``` tsx
import * as React from 'react';

export default class MyComponent extends React.Component<MyComponentProps, {}> {
    render() {
        return (
            <div>MyComponent</div>
        );
    }
}

export interface MyComponentProps {
    //props
}
```

*Initialize `state`*
``` tsx
export default class StatefulComponent extends React.Component {
    state = {
        foo: "",
        bar: [],
        baz: {
            biz: "None",
            boom: 0
        }
    }
    // Rest of component implementation
}
```

