import React, { Component } from 'react';
class Form extends Component {
    constructor() {
        super();
        this.state={
            username:'',
            password:''
        }
    }
    onUserChange = (event) => {
        this.setState({username:event.target.value});
    }
    onPassChange = (event) => {
        this.setState({password:event.target.value});
    }
    handleSubmit = () => {
        console.log(this.state.username);
        console.log(this.state.password);
    }
 
    render() { 
    
        return (
            <form >
                <label >Username : </label><br></br>
                <input type="text" onChange={this.onUserChange}></input><br></br>
                <label>Password : </label><br></br>
                <input type="text" onChange={this.onPassChange}></input><br></br>
                <br></br>
                <input type="submit" onClick={this.handleSubmit}></input>
            </form>
          );
    }
}
 
export default Form ;