import React, { Component } from 'react';
import './github.css';

const apikey = "3be40d33dc3d091e130c4b42ff8f62bf";


class Flickr extends Component {
  constructor(props){
    super(props);
    this.state =  {input: '',
                apidata: '',
                apidata2: ''
    }
    this.updatedata = this.updatedata.bind(this);
    this.getData = this.getData.bind(this);
  }

  updatedata(e){
    this.setState({ input: e.target.value});
  
  }
  
  getData(e){  
    e.preventDefault();
    var url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=37f5eabc4e9b3994cd62571562fcc451&tags=${this.state.input}&format=json&nojsoncallback=1&auth_token=72157686414731200-648fbaddb2c78d44&api_sig=8fd404cdd090159b671469a5a81d8cb6`;
    console.log(url);
    
    fetch(url)
      .then (d => d.json())
        .then (result => this.setState({apidata: result}))
    
    var link = this.state.apidata.photos.photo[0];
    var url1 = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=37f5eabc4e9b3994cd62571562fcc451&photo_id=${link.id}&format=json&nojsoncallback=1&auth_token=72157686414731200-648fbaddb2c78d44&api_sig=a9375746432104e71aa9933e6da8b8f6`;
    fetch(url1)
    .then (d => d.json())
      .then (result => this.setState({apidata2: result}))
}

 
  
  render() {
    return (
     
      <div className="form-group-1">
         <br /> <br />
        <form onSubmit={this.getData} >
        <input type="text" className="searchInput" placeholder = "Search Image" onChange={this.updatedata} value={this.state.input}/>
        </form>
        
    
    
      
      <img className= "image" src = {this.state.apidata.avatar_url}  />
      </div>  
    );
  }
}

export default Flickr;
