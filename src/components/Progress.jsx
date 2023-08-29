import React from 'react';

class Progress extends React.Component {
    render () {
        const {percentage} = this.props;
        const style = {
            width: `${percentage}%`
        };
        return (            
            <div className="progress mt-5 mx-5">
                <div className="progress-bar" role="progressbar" aria-valuenow={this.percentage} aria-valuemin="0"
                 aria-valuemax="100" aria-label="progressbar" style={style}>
                </div>
            </div>
        );
    }    
};

export default Progress;