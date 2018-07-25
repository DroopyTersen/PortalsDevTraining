import * as React from 'react';

export default class AppHeader extends React.PureComponent<AppHeaderProps, {}> {
    render() {
        return (
            <h1>My App</h1>
        );
    }
}

export interface AppHeaderProps {
    title: string
}