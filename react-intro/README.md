# Introduction to React
This exercise is meant to isolate React and Typescript development.
### 1. Open the Exercise
In the terminal, open the `react-intro` directory. Next, install all of the dependencies. Lastly, try running the web application.
``` bash
cd react-intro
npm install
npm run start
```

### 2. Create your first React Component

#### Component Based
The "React way" advises us to break down complex UI's into separate encapsulated components.  

Put less Computer Science'y: Break up the user interface into small pieces (components). Each component will be simpler because it focuses on only one thing. It also opens the door for component reuse.

#### JSX
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




