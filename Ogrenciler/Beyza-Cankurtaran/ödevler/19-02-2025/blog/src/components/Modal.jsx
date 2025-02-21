import React from 'react'

const Modal = ({ show, handleClose, explanation, title }) => {
  return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!show}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>{explanation}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Modal
