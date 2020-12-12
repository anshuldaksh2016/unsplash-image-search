import React from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";

class App extends React.Component {
  state = {
    photos: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ photos: response.data.results });
    console.log(photos);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <SearchBar onSubmit={() => this.onSearchSubmit} />

        <p>Length is {this.state.photos.length}</p>
      </div>
    );
  }
}

export default App;
