import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <h4 className="card-title">
                {this.props.children}
            </h4>
        );
    }
}

export default Title;