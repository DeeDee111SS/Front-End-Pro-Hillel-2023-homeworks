import React from 'react';

class ListGroup extends React.Component{
    render () {
        const {children} = this.props;
        return (
            <ul className="list-group">
                {children.map(item =>                 
                    <li className="list-group-item">{item}</li>                    
                )}
            </ul>
        );
    };    
};

export default ListGroup;