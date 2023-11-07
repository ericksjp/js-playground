import React, { useContext } from "react"
import PropTypes from 'prop-types'

import { ThemeContext } from '../../context/ThemeContext'
import * as $ from './styles'

export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return(
    <$.Button onClick={props.onClick} $theme={theme}>
      {props.children}
    </$.Button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}