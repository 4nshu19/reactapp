import React from 'react';

const DefaultURL = 'https://media.giphy.com/media/'
const api = '';




class Giphy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: 'YsTs5ltWtEhnq'
        };
    }
    
    render(){
        return(
            <div>
            <div className="form-group-1">
             <br /> <br />
                
                <form onSubmit={this.getData} >
                <input type="text" className="searchInput" placeholder = "Enter gif to search" />
                </form>
                {/* <img src = {DefaultURL+ this.state.id + "giphy.gif"} alt = "some text" /> */}
                <img src = "https://media.giphy.com/media/YsTs5ltWtEhnq/giphy.gif" alt = "some text" />
            </div>
            </div>    
        );
    }
}

export default Giphy;