import React from "react"
import PropTypes from 'prop-types'
import Button from "../Button";
import { Title } from "./styles";

export default function PostHeader(props) {
  return (
    <>
      <Title as="h3">
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
      </Title>
      <Button 
        onClick={() => props.onRemove(props.post.id) }
      >
        Remover
      </Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}