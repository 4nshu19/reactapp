import React, { Component } from 'react';
import './github.css';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state =  {input: '',
                apidata: ''
    }
    this.updatedata = this.updatedata.bind(this);
    this.getData = this.getData.bind(this);
  }

  updatedata(e){
    this.setState({ input: e.target.value});
  
  }
  
  getData(e){  
    e.preventDefault();
    var url = "https://api.github.com/users/"+ this.state.input ;
    fetch(url)
      .then (d => d.json())
        .then (result => this.setState({apidata: result}))
   
  }

 
  
  render() {
    return (
     
      <div className="form-group-1">
         <br /> <br />
        <form onSubmit={this.getData} >
        <input type="text" className="searchInput" placeholder = "Enter Github Username" onChange={this.updatedata} value={this.state.input}/>
        </form>
        
        <table className = "striped responsive-table" >
        <thead>
          <tr>
              <th>Data</th>
              <th>Value</th>
          </tr>    
        </thead>

        <tbody>
          <tr>
            <td>Your Name is </td>
            <td>{ this.state.apidata && this.state.apidata.name}</td>
            
          </tr>
          <tr>
            <td>Your Github URL is </td>
            <td>{ this.state.apidata && <a href={this.state.apidata.html_url} > Click Here </a>}</td>
          </tr>
          <tr>
            <td>Your Followers Count is  </td>
            <td>{ this.state.apidata && this.state.apidata.followers}</td>
          </tr>
          <tr>
            <td>Your Following Count </td>
            <td>{ this.state.apidata && this.state.apidata.following}</td>
          </tr>
          <tr>
            <td>Your Public Repos Count </td>
            <td>{ this.state.apidata && this.state.apidata.public_repos}</td>
          </tr>
          
        </tbody>
      </table>
    
      
      <img className= "image" src = {this.state.apidata.avatar_url}  />
      </div>  
    );
  }
}

export default Weather;
