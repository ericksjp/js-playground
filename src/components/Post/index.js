import React from "react";
import PropTypes from 'prop-types'
import PostHeader from "./PostHeader";

import * as $ from './styles'

function Post(props) {
  // if (props.post.read) { renderização condicional
  //   return <h2>{props.post.title} já lido</h2>;
  // }

  return (
    <$.Container $removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />

      <$.Subtitulo>{props.post.subtitle}</$.Subtitulo>
      <$.Rate >Media: {props.likes / 2}</$.Rate>
    </$.Container>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}

Post.defaultProps = {
  likes: 0
}

export default Post;