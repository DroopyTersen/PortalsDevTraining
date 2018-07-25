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

## 2. Create your first React Component

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
Inside the `render` method you probably noticed we have what looks HTML. But what are those curly braces? And wait, how can we have html inside a JS/TS file if it isn't wrapped in a quotes? It's certainly not valid JavaScript/TypeScript. 

Answer: JSX 

 > Did you notice when we add classes to the `icon` tag, we use `className` instead of `class`? This is because `class` is a reserved keyword in javascript.

If you're curious how it works, when we run our `build` step, the transpiler turns the JSX into valid JavaScript function calls.

*The transpiler turns the first line into the second*
``` html
<div id="root">Hello world</div>;
React.createElement("div", { id: "root" }, "Hello world");
```
[Click here](http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DYUwLgBGAWCWB2BzCBeCAiA9vcB3TMATiCOgNwBQAPACawBuAfABIjDCYT6HA0QDeMBIgC-AoUhFUA9HSZkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&sourceType=module&lineWrap=false&presets=react%2Cstage-2&prettier=true&targets=&version=6.26.0&envVersion=1.6.2) to experiment with how JSX gets transpiled.

### Exercise
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

## Working with `props`
The most common/useful thing you'll find about React is how easy it is to pass parameters/arguments to child components. These are called `props`.
## Helpful Snippets

*New react component*
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


