import React from "react";

class SearchBar extends React.Component {
  state = { term: " " };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.term);

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) =>
                this.setState({
                  term: e.target.value
                })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
