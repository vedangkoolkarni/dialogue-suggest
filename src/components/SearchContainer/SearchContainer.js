import React from 'react';
import {connect} from 'react-redux';
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.executeSearch = this.executeSearch.bind(this);
  }
  componentDidMount() {
    this.searchInput.current.value = 'unagi';
  }
  executeSearch() {
    const searchKeyword = this.searchInput.current.value;
    this.props.onExecuteSearch(searchKeyword);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className='search-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='search-input'
            onChange={this.handleQueryKeywordChange}
            ref={this.searchInput}
          >
          </input>
          <button className='search-btn' onClick={this.executeSearch}>Search</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    searchKeyword: state.searchKeyword
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    onExecuteSearch: (searchKeyword) => {
      dispatch({type: 'BASIC_DIALOGUE_SEARCH', searchKeyword});
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(SearchContainer);