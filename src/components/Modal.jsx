import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class Modal extends React.Component{
  
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  
  render() {
    const { isOpen, children } = this.props;
    const modalStyle = {
        display: isOpen ? 'block' : 'none',
    };

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} style={modalStyle} role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
};

export default Modal;