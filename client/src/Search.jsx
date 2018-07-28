import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
    };
  }

  handleValueChange(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  render () {
    return (
      <div>
        <input type="text" onChange={this.handleValueChange.bind(this)} />
        <input className="searchButton" type="submit" value="Search" onClick={() => { this.props.handleSearch(this.state.searchValue); }} />
      </div>
    );
  }
}

export default Search;

