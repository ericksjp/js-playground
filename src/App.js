import React from "react";
import Post from "./Post";
import Header from "./Header";

const titulo01 = 'Titulo01'

function App() {
  return (
    <>
      <Header title="Blog Do maluco">
        <h2>Posts da Semana</h2>
      </Header>

      <hr/>

      <Post 
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
      />
    </>
  );
}

export default App;