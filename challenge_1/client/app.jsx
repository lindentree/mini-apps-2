import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Events from './Events.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query:'',
      results: [],
      offset: 0,
      perPage: 10
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSearchedEvents = this.getSearchedEvents.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    //this.getSearchedEvents();
  }

  handleInputChange () {
    this.setState({
      query: this.search.value
    })
  }

  getSearchedEvents () {
    axios.get(`/events?q=${this.state.query}&limit=${this.state.perPage}`)
      .then((response) => {
        this.setState({
          results: response.data,
          pageCount: Math.ceil(response.data.length / 10),
        }, ()=> {
        })
      })
  }

  handlePageClick (data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({ offset: offset }, () => {
      this.getSearchedEvents();
    });
  };

  render () {
    return (
      <div>
   
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}   
          />
          <p>{this.props.query}</p>
        </form>
        <button onClick={this.getSearchedEvents}>
          Search
        </button>
        <Events data={this.state.results} />
      </div>
      )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));