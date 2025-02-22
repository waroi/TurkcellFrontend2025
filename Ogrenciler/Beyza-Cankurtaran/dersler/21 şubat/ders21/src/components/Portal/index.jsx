import React from 'react';
import ReactDOM from 'react-dom';
const index = ({target,text}) => {
  return ReactDOM.createPortal(
    <div>Selam dünyalı ben Ortal,hedefim ise {text}dostum</div>,target
  )
}

export default index