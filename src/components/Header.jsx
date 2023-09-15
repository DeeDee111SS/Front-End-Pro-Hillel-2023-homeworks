import React from 'react';

class Header extends React.Component{
    render() {
        return (            
            <div className="modal-header">
                <div className="modal-title">{this.props.children}</div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={this.props.toggle} aria-label="Close">
                </button>
            </div>
        );
    }
}

export default Header;