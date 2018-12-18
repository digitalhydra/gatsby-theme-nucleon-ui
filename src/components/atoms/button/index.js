import React from 'react'
import './style.scss';
function Button(props) {
  const {children} = props;
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button
