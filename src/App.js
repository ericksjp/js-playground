import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
      { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: true},
      { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false},
      { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 80, read: false},
  ]);

  function handleRefresh() {
    // toda vez que fazemos a atualização do estado baseado no estado anterior, não acessamos
    setPosts((prevState) => [ //se depender do valor anterior para executar essa função, usar o prevState
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 20,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => [
      ...prevState.filter((post) => postId !== post.id)
    ])
  }

  return (
    <>
      <Header title="Blog Do maluco">
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            onRemove={handleRemovePost}
            post={post}
          />
        );
      })}
    </>
  );
}

export default App;