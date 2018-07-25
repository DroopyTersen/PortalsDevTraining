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
    onClick: (event) => void
}