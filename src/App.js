import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
      { title: 'Title#01', subtitle: 'Sub#01', likes: 20},
      { title: 'Title#02', subtitle: 'Sub#02', likes: 10},
      { title: 'Title#03', subtitle: 'Sub#03', likes: 80},
  ]);

  function handleRefresh() {
    setPosts((prevState) => [ //se depender do valor anterior para executar essa função, usar o prevState
      ...prevState,
      {
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 20,
      },
    ]);
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

      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            likes={post.likes}
            post={{
              title: post.title,
              subtitle: post.subtitle,
            }}
          />
        );
      })}

      {/* <Post 
        likes = {20}
        post = {{
          title: "Titulo da noticia 01",
          subtitle: "Subtitulo da noticia 01"
        }}
      />

      <Post 
        likes={10}
        post = {{
          title: "Titulo da noticia 02",
          subtitle: "Subtitulo da noticia 02"
        }}
      />

      <Post 
        likes={20}
        post = {{
          title: "Titulo da noticia 03",
          subtitle: "Subtitulo da noticia 03"
        }}
      /> */}
    </>
  );
}

export default App;