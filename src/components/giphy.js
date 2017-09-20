import React from 'react';

class Giphy extends React.Component {
    render(){
        return(
            <div>
            <div className="form-group-1">
             <br /> <br />
                <form onSubmit={this.getData} >
                <input type="text" className="searchInput" placeholder = "Enter Location" />
                </form>
            </div>
            </div>    
        );
    }
}

export default Giphy;