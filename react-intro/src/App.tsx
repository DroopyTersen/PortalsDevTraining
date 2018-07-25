import * as React from 'react';
import IconButton from "./IconButton";

export default class ParentComponent extends React.Component {
    onAddItemClick = (event) => {
        console.log("You clicked the IconButton")
    }
    render() {
        return (
            <div>
                <IconButton icon="Plus" onClick={this.onAddItemClick} />
            </div>
        );
    }
}

export interface AppProps {
    //props
}