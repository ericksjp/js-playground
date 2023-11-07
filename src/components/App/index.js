import React, { useState } from "react";

import Post from "../Post";
import Header from "../Header";

import { ThemeProvider } from '../../context/ThemeContext';

import styles from './App.scss'

function App() {
  const [posts, setPosts] = useState([
      { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false , removed: true},
      { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false, removed: false},
      { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 80, read: false, removed: false},
  ]);

  function handleRefresh() {
    // toda vez que fazemos a atualização do estado baseado no estado anterior, não acessamos o 'objeto' diretamente, usamos o prevState.
    setPosts((prevState) => [ //se depender do valor anterior para executar essa função, usar o prevState
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 20,
        read: false,
        removed: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        postId === post.id 
        ? { ...post, removed: true} 
        : post
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header title="Blog Do maluco">
        <h2 className={styles.title}>
          Posts da Semana
          <button onClick={() => handleRefresh()}>Atualizar</button>
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
        )
      })}
    </ThemeProvider>
  );
}

export default App;