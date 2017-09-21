import React, { Component } from 'react';
import './news.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const DEFAULT_PAGE = 0;
const PARAM_PAGE = 'page=';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    result: null,
    searchTerm : DEFAULT_QUERY,
    isLoading: false,
  };
  this.setSearchTopstories = this.setSearchTopstories.bind(this); 
  this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
  this.onDismiss = this.onDismiss.bind(this);
  this.onSearch = this.onSearch.bind(this);
  this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  setSearchTopstories(result) {
    
    const { hits, page } = result;
    const oldHits = page !== 0
      ? this.state.result.hits
      : [];
    const updatedHits = [
      ...oldHits,
      ...hits
  ];
    this.setState({
      result: { hits: updatedHits, page }
    , isLoading: false  
    }
    
    );
  }
  
  fetchSearchTopstories(searchTerm,page) {
    this.setState({ isLoading: true });
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => this.setSearchTopstories(result));
      // .catch(e => e);
  }
  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
  }
  
  
  onDismiss(id){
    const isNotId = item => item.objectID != id;
    const newList = this.state.result.hits.filter(isNotId);
    this.setState({
      result: {...this.state.result, hits: newList}
    });
  }

  onSearch(e){
    this.setState({ searchTerm: e.target.value});
  }

  onSearchSubmit(e){
    this.fetchSearchTopstories(this.state.searchTerm,DEFAULT_PAGE);
    e.preventDefault();
  }

  render() {
    const { searchTerm, result } = this.state;
    if (!result) { return null; }
    const page = (result && result.page) || 0;
    return (
      <div className="page">
        <div className = "interactions">
           
           <Search
           value={searchTerm}
           onChange={this.onSearch}
           onSubmit={this.onSearchSubmit}
           > Search
          </Search> 
          { this.state.isLoading && <Loading />}
          </div>
          
              <Table
              list={result.hits}
              onDismiss={this.onDismiss}
              />
            
               
          
          <div className="interactions">
            {this.state.isLoading ? <Loading /> : 
            <Button onClick={() => this.fetchSearchTopstories(searchTerm, page + 1)}>
            More
            </Button> 
            }
          </div>

        
</div>


); }
}

class Search extends Component {
  
  componentDidMount()
  {this.input.focus();}
  
  render() {
    const { value, onChange } = this.props;
    return (
      <form onSubmit = {this.props.onSubmit} >
        <input
          placeholder= "Enter topic for news"
          type="text"
          value={value}
          onChange={onChange}
          ref = {(node) => {this.input = node;}}
        /> 
        <Button type = "submit" onClick = {this.props.onSubmit}>
          {this.props.children}
        </Button>   
      </form>
); }
}



class Table extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
      <div className = "table">
        { list.map(item =>
          <div key={item.objectID} className = "table-row">
            
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            {/* <span>{item.author}</span> */}
            {/* <span>{item.num_comments}</span> */}
            {/* <span>{item.points}</span> */}
            <span>
            <Button onClick={() => onDismiss(item.objectID)} className="button-inline" >Dismiss</Button>
            </span>
            
</div> )}
</div> );
} }


class Button extends Component { render() {
  const { onClick, className, children} = this.props;
  return ( 
          <button
          onClick={onClick}
          className={className}
          type="button" >
             {children}
        </button> );
  } }

  const Loading = () => <div>Loading ...</div>

  export default App;


