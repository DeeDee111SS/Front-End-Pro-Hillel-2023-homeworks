import React from 'react';

class Text extends React.Component {
    render() {
        return (
            <p className="card-text">
                {this.props.children}
            </p>
        );
    }
}

export default Text;