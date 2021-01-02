import React from 'react';
import DialogueList from '../DialogueList/DialogueList';
import {connect} from 'react-redux';
class DialogueListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: [],
    };
  }
  componentDidMount() {
    this.search(this.props.searchKeyword);
  }
  componentDidUpdate(newProps) {
    if(this.props.searchKeyword !== newProps.searchKeyword) {
      this.search(this.props.searchKeyword);
    }
  }
  prepareQuery(searchKeyword) {
    const filters = {
      q: searchKeyword,
      rows: process.env.REACT_APP_DEFAULT_RESULT_ROWS,
      indent: 'off',
      df: process.env.REACT_APP_DEFAULT_FIELD,
      wt: process.env.REACT_APP_RESULT_RESPONSE_TYPE
    };
    return 'select?' + (new URLSearchParams(filters).toString());
  }
  search(searchKeyword) {
    const query = this.prepareQuery(searchKeyword);
    fetch(process.env.REACT_APP_SEARCH_API_URL + query)
    .then(res => res.json())
    .then((result) => {
        this.setState({
          isLoaded: true,
          error: null,
          items: result.response.docs
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
          items: []
        });
      });
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
     return <DialogueList results={items}></DialogueList>
    }
  }
}
const mapStateToProps = (state) => {
  return {
    searchKeyword: state.searchKeyword
  }
};
export default connect(mapStateToProps)(DialogueListContainer);