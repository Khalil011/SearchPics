import React from "react";

class SearchBar extends React.Component {
  inputRef = React.createRef();
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onClick(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui field">
            <label>Search</label>
            <input
              onChange={() =>
                this.setState({ term: this.inputRef.current.value })
              }
              ref={this.inputRef}
              type="text"
            />
            <button
              className="ui primary button"
              style={{ marginTop: "10px" }}
              onClick={(e) => {
                this.onFormSubmit(e);
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
//()=>this.setState({term:this.inputRef.current.value})
export default SearchBar;
