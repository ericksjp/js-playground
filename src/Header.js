import React, { useContext } from "react";
import PropTypes from 'prop-types'
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Button 
        onClick={onToggleTheme}
      >
        Mudar Tema
      </Button>
      <h1>{props.title}</h1>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}


Header.defaultProps = {
  title: `Titulo Padrão`,
}