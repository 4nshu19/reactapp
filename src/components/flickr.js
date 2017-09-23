import React, { Component } from 'react';

import './github.css';

const apikey = "3be40d33dc3d091e130c4b42ff8f62bf";


class Flickr extends Component {
  constructor(props){
    super(props);
    this.state =  {input: '',
                apidata: '',
                 }
  
    
  }

  
 
  componentDidMount(){  
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then (d => d.json())
          .then (result => this.setState({apidata: result}))
      }
    
    // fetch('http://192.168.100.23:8002/api/customer/im')
    //     .then (result => this.setState({apidata: result}))
    //   }
    
      

 
  
  render() {
    return (
     
      <div className="form-group-1">
         <br /> <br />
        
       
        <center><h6>{this.state.apidata && this.state.apidata.explanation} </h6>
          <img src = {this.state.apidata.url} /> </center>
      </div>  
      // <div>
      //   <img src = {this.state.apidata} alt ="BDFB" />
      //   <img src = { "http://192.168.100.23:8002/api/customer/im"} alt = "second image" />
      // </div>
  );
  }
}

export default Flickr;
