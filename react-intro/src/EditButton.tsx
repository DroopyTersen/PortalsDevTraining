import * as React from 'react';

export default class EditButton extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <i className="ms-Icon ms-Icon--Edit" />
            </div>
        );
    }
}

const styles = {
    container: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
    }
}
