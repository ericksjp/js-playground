import React, { useContext } from "react"
import PropTypes from 'prop-types'

import { ThemeContext } from '../context/ThemeContext'

export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return(
    <button 
      onClick={props.onClick}  
      style={{ 
        color: theme === 'dark' ? 'white' : 'black',
        backgroundColor: theme === 'dark' ? 'black' : 'white',
      }}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}