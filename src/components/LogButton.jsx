import React, { Component } from 'react';

class LogButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
            newValue: 0,
        };
    }

    handleAddClick = () => {
        const { log, newValue } = this.state;
        const newLog = [newValue + 1, ...log];
        this.setState({
            log: newLog,
            newValue: newValue + 1,
        });
    };

    handleSubtractClick = () => {
        const { log, newValue } = this.state;
        const newLog = [newValue - 1, ...log];
        this.setState({
            log: newLog,
            newValue: newValue - 1,
        });
    };

    handleLogItemClick = (index) => {
        const { log } = this.state;
        const newLog = [...log.slice(0, index), ...log.slice(index + 1)];
        this.setState({ log: newLog });
    };

    render() {
        const { log } = this.state;

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.handleAddClick}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.handleSubtractClick}
                    >
                        -
                    </button>
                </div>
                <div className="list-group">
                    {log.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.handleLogItemClick(index)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default LogButton;