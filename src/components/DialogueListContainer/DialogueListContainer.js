import React from 'react';
import DialogueList from '../DialogueList/DialogueList';
class DialogueListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  prepareQuery() {
    let query = 'select?q=*:*&rows=20';
    return query;
  }

  search() {
    const query = this.prepareQuery();
    fetch(process.env.REACT_APP_SEARCH_API_URL + query)
    .then(res => res.json())
    .then((result) => {
        console.log('result: ', result);
        this.setState({
          isLoaded: true,
          items: result.response.docs
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }
  componentDidMount() {
    this.search();
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

export default DialogueListContainer;