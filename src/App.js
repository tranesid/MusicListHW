import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import "./App.css";
import MusicList from "./Table";
import Songs from "./Songs";

class App extends React.Component {
  state = {
    show: false,
    songs: [
      { id: 1, name: "Freaky Deaky", artist: "Doja Cat"},
      { id: 2, name: "Kiss Me More", artist: "Doja Cat"},
      { id: 3, name: "Five Hours", artist: "Deorro"},
      { id: 4, name: "Somebody Else", artist: "The 1975"},
    ],
  };
  render() {
    const {show} = this.state
    return (
      <Container>
        <div>
          <Header as="h1">Now Playing</Header>
          <MusicList />
          <Songs songs={this.state.songs}/>
        </div>
      </Container>
    );
  }
}

export default App;        
